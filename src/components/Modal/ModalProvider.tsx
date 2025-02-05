'use client';

import React, { createContext, useCallback, useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/Dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

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

const ModalProvider = ({
  children,
  portalProvider: NestProvider = React.Fragment,
}: React.PropsWithChildren<{ portalProvider?: React.ComponentType<React.PropsWithChildren> }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [nodeId, setNodeId] = useState('');
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handleDismiss = useCallback(() => {
    setIsOpen(false);
    setNodeId('');
    setCloseOnOverlayClick(true);
    setTimeout(() => {
      setModalNode(undefined);
    }, 300);
  }, []);

  const handlePresent = useCallback(
    (node: React.ReactNode, newNodeId: string, closeOverlayClick: boolean) => {
      setModalNode(node);
      setIsOpen(true);
      setNodeId(newNodeId);
      setCloseOnOverlayClick(closeOverlayClick);
    },
    [],
  );

  const handleOverlayDismiss = useCallback(() => {
    closeOnOverlayClick && handleDismiss();
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
    [isOpen, nodeId, modalNode, handlePresent, handleDismiss],
  );
  console.log(isOpen, modalNode);
  return (
    <Context.Provider value={providerValue}>
      <NestProvider>
        <Dialog open={isOpen} onOpenChange={handleOverlayDismiss}>
          <DialogContent
            onEscapeKeyDown={handleOverlayDismiss}
            onPointerDownOutside={handleOverlayDismiss}
          >
            <VisuallyHidden>
              <DialogTitle></DialogTitle>
              <DialogDescription></DialogDescription>
            </VisuallyHidden>
            {modalNode}
          </DialogContent>
        </Dialog>
        {children}
      </NestProvider>
    </Context.Provider>
  );
};

export default ModalProvider;
