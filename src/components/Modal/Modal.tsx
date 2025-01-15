import React from "react";
import {cn} from "@/lib/utils";

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
        <div className={cn('overflow-hidden bg-neutral-50 border border-neutral-300 w-full max-h-full z-[100] md:w-auto')}>
            {children}
        </div>
    )
}
const Modal = ({
    title, children}: ModalProps) => {
    return (
        <ModalWrapper>
            {title}
            {children}
        </ModalWrapper>
    )
};
