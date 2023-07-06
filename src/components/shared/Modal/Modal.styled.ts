import { DetailedHTMLProps } from "react";
import styled from "styled-components";

const Body = styled.div<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>`
  z-index: 3;
  width: 80%;
  height: 80%;
`;

const StyledModal = {
  Body,
};

export default StyledModal;
