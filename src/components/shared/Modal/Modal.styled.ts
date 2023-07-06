import { DetailedHTMLProps } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Body = styled.div<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>`
  z-index: 3;
  width: 80%;
  height: 80%;
`;

const StyledModal = {
  Overlay,
  Body,
};

export default StyledModal;
