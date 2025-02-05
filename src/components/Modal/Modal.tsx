import React from 'react';
import { cn } from '@/lib/utils';

export interface ModalProps {
  title: React.ReactNode;
  hideCloseButton?: boolean;
  onBack?: () => void;
  headerPadding?: string;
  bodyPadding?: string;
  headerBackground?: string;
  headerRightSlot?: React.ReactNode;
  bodyAlignItems?: string;
  headerBorderColor?: string;
  bodyTop?: string;
}
const ModalWrapper = ({ children }) => {
  return (
    <div
      className={cn(
        'z-[100] max-h-full w-full overflow-hidden border border-neutral-300 bg-neutral-50 md:w-auto',
      )}
    >
      {children}
    </div>
  );
};
const Modal = ({ title, children }: ModalProps) => {
  return (
    <ModalWrapper>
      {title}
      {children}
    </ModalWrapper>
  );
};
