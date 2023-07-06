import styled from "styled-components";

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border: ${({ theme }) => `5px solid ${theme.lightGrayColor}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledSpinner = {
  Wrapper,
};

export default StyledSpinner;
