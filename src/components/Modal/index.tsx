import React, {ReactChild, ReactChildren} from "react";
import { createPortal } from "react-dom";
import { ModalCloseButton, ModalContainer, ModalOverlay, ModalWrapper } from './styles';

export interface ModalProps {
    children?: ReactChild | ReactChildren
    open: boolean
    onClose: () => void
};

export default function Modal({ children, onClose, open }: ModalProps) {
  const modal = (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} type="button" />
      <ModalContainer>
        <ModalCloseButton onClick={onClose}>
          X
        </ModalCloseButton>
        {children}
      </ModalContainer>
    </ModalWrapper>
  )

  return open ? createPortal(modal, document.body) : null
}
