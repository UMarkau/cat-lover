import { PropsWithChildren } from "react";

import { Overlay } from "../Overlay";

import Styled from "./Modal.styled";

export interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Modal = ({
  isVisible,
  onClose,
  children,
}: PropsWithChildren<IModalProps>) => {
  if (!isVisible) {
    return null;
  }

  return (
    <Overlay
      onClick={() => {
        onClose();
      }}
    >
      <Styled.Body
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
      </Styled.Body>
    </Overlay>
  );
};
