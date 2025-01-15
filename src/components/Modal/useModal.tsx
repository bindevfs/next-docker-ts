'use client';

import React, {useCallback, useContext, useEffect, useRef} from "react";
import get from "lodash/get";
import { Context } from "@/components/Modal/ModalProvider";

type Handler = () => void;
const useModal = (modal: React.ReactNode,
                  closeOnOverlayClick = true,
                  updateOnPropsChange = false,
                  modalId = "defaultNodeId"): [Handler, Handler] => {
    const currentModal = useRef<React.ReactNode>();
    currentModal.current = modal;
    const { isOpen, nodeId, modalNode, setModalNode, onPresent, onDismiss } = useContext(Context);
    const onPresentCallback = useCallback(() => {
        onPresent(currentModal.current, modalId, closeOnOverlayClick);
    }, [modalId, onPresent, closeOnOverlayClick]);
    const onDismissCallback = useCallback(() => {
        if (nodeId === modalId) {
            onDismiss?.();
        }
    }, [modalId, onDismiss, nodeId]);

    useEffect(() => {
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            const modalProps = get(modal, "props");
            const oldModalProps = get(modalNode, "props");
            if (modalProps && oldModalProps && modalProps !== oldModalProps) {
                setModalNode(modal);
            }
        }
    }, [updateOnPropsChange, nodeId, modalId, isOpen, modal, modalNode, setModalNode]);

    return [onPresentCallback, onDismissCallback];

}
export default useModal;