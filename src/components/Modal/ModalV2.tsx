'use client';
import React, { createContext, useMemo } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/Dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export const ModalV2Context = createContext<{
  onDismiss?: () => void;
}>({});
export function ModalV2({ isOpen, onDismiss, closeOnOverlayClick = true, children }) {
  const handleOverlayDismiss = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (closeOnOverlayClick) {
      onDismiss?.();
    }
  };
  const providerValue = useMemo(() => ({ onDismiss }), [onDismiss]);
  return (
    <ModalV2Context.Provider value={providerValue}>
      <Dialog open={isOpen} onOpenChange={onDismiss}>
        <DialogContent
          onEscapeKeyDown={handleOverlayDismiss}
          onPointerDownOutside={handleOverlayDismiss}
        >
          <VisuallyHidden>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
          {children}
        </DialogContent>
      </Dialog>
      {children}
    </ModalV2Context.Provider>
  );
}
