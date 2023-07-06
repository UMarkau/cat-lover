import { PropsWithChildren, useRef } from "react";

import { useClickOutside } from "../../../hooks";
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
  const ref = useRef<HTMLElement>() as React.MutableRefObject<HTMLInputElement>;

  const handleClose = () => {
    onClose();
  };

  useClickOutside(ref, handleClose);

  if (!isVisible) {
    return null;
  }

  return (
    <Styled.Overlay>
      <Styled.Body ref={ref}>{children}</Styled.Body>
    </Styled.Overlay>
  );
};