'use client';
import React, { createContext, useState } from 'react';
import { useIsomorphicEffect } from '@/hook/useIsomorphicEffect';

type State = {
  [key: string]: boolean;
};

export type BreakpointChecks = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} & State;
const breakpoints: Record<string, number> = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
} as const;

type MediaQueries = {
  [key: string]: string;
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */

const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0;

  return Object.keys(breakpoints).reduce<MediaQueries>((accum, size, index, array) => {
    const breakpoint = breakpoints[size];

    if (index === array.length - 1) {
      return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` } as MediaQueries;
    }

    const minWidth = prevMinWidth;
    prevMinWidth = breakpoint;

    return {
      ...accum,
      [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint - 1}px)`,
    } as MediaQueries;
  }, {} as MediaQueries);
})();

const getKey = (size: string) => `is${size.charAt(0).toUpperCase()}${size.slice(1)}`;

const getState = (): State => {
  const s = Object.keys(mediaQueries).reduce<State>((accum, size) => {
    const key = getKey(size);
    if (typeof window === 'undefined') {
      return {
        ...accum,
        [key]: false,
      } as State; // Ensure the correct type
    }

    const mql =
      typeof window?.matchMedia === 'function' ? window.matchMedia(mediaQueries[size]) : null;

    return { ...accum, [key]: mql?.matches ?? false } as State;
  }, {} as State);

  return s;
};

export const MatchBreakpointsContext = createContext<BreakpointChecks>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const getBreakpointChecks = (state: State): BreakpointChecks => {
  return {
    ...state,
    isMobile: state.isXs || state.isSm,
    isTablet: state.isMd || state.isLg,
    isDesktop: state.isXl || state.isXxl,
  };
};

export const MatchBreakpointsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<BreakpointChecks>(() => getBreakpointChecks(getState()));

  useIsomorphicEffect(() => {
    // Create listeners for each media query returning a function to unsubscribe
    const handlers = Object.keys(mediaQueries).map((size) => {
      let mql: MediaQueryList;
      let handler: (matchMediaQuery: MediaQueryListEvent) => void;

      if (typeof window?.matchMedia === 'function') {
        mql = window.matchMedia(mediaQueries[size]);
        handler = (matchMediaQuery: MediaQueryListEvent) => {
          const key = getKey(size);
          setState((prevState) =>
            getBreakpointChecks({
              ...prevState,
              [key]: matchMediaQuery.matches,
            }),
          );
        };

        // Safari < 14 fix
        if (mql.addEventListener) {
          mql.addEventListener('change', handler);
        }
      }

      return () => {
        // Safari < 14 fix
        if (mql?.removeEventListener) {
          mql.removeEventListener('change', handler);
        }
      };
    });
    setState(getBreakpointChecks(getState()));

    return () => {
      handlers.forEach((unsubscribe) => {
        unsubscribe();
      });
    };
  }, []);

  return (
    <MatchBreakpointsContext.Provider value={state}>{children}</MatchBreakpointsContext.Provider>
  );
};
