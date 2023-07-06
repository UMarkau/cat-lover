import styled from "styled-components";

import { Button } from "../../../shared";

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const CopyLinkButton = styled(Button)``;

const StyledCatDetailsModal = {
  Wrapper,
  Image,
  ButtonsWrapper,
  CopyLinkButton,
};

export default StyledCatDetailsModal;
