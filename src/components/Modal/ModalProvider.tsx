'use client';

import React, { createContext, useCallback, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import getPortalRoot from '@/utils/getPortalRoot';
import { Dialog, DialogContent } from "@/components/ui/Dialog";

interface ModalContext {
    isOpen: boolean;
    nodeId: string;
    modalNode: React.ReactNode;
    setModalNode: React.Dispatch<React.SetStateAction<React.ReactNode>>;
    onDismiss: () => void;
    onPresent: (node: React.ReactNode, newNodeId: string, closeOverlayClick: boolean) => void;
}

export const Context = createContext<ModalContext>({
    isOpen: false,
    nodeId: '',
    modalNode: null,
    setModalNode: () => null,
    onDismiss: () => null,
    onPresent: () => null,
});

const ModalProvider: React.FC<React.PropsWithChildren<{ portalProvider?: React.FC<React.PropsWithChildren> }>> = ({
                                                                                                                      children,
                                                                                                                      portalProvider: NestProvider = React.Fragment,
                                                                                                                  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalNode, setModalNode] = useState<React.ReactNode | undefined>();
    const [nodeId, setNodeId] = useState('');
    const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

    const handleDismiss = useCallback(() => {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId('');
        setCloseOnOverlayClick(true);
    }, []);

    const handlePresent = useCallback((node: React.ReactNode, newNodeId: string, closeOverlayClick: boolean) => {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
        setCloseOnOverlayClick(closeOverlayClick);
    }, []);

    const handleOverlayDismiss = useCallback(() => {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    }, [closeOnOverlayClick, handleDismiss]);

    const providerValue = useMemo(
        () => ({
            isOpen,
            nodeId,
            modalNode,
            setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
        }),
        [isOpen, nodeId, modalNode, handlePresent, handleDismiss]
    );
    return (
        <Context.Provider value={providerValue}>
            <NestProvider>
                <Dialog open={isOpen}>
                    <DialogContent onEscapeKeyDown={handleOverlayDismiss} onPointerDownOutside={handleOverlayDismiss}>
                        {React.isValidElement(modalNode) &&
                            React.cloneElement(modalNode, {
                                onDismiss: handleDismiss,
                            })}
                    </DialogContent>
                </Dialog>
                {children}
            </NestProvider>
        </Context.Provider>
    );
};

export default ModalProvider;
