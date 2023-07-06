import styled from "styled-components";

const Body = styled.div`
  z-index: 3;
  width: 80%;
  height: 80%;
  background-color: ${({ theme }) => theme.whiteColor};
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  border-radius: 15px;
`;

const StyledModal = {
  Body,
};

export default StyledModal;
