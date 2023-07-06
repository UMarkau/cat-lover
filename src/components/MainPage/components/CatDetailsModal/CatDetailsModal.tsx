import { Modal, IModalProps } from "../../../shared";

import Styled from "./CatDetailsModal.styled";

export const CatDetailsModal = ({ isVisible, onClose }: IModalProps) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <Styled.Wrapper></Styled.Wrapper>
    </Modal>
  );
};
