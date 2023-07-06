import { PropsWithChildren } from "react";

import Styled from "./Overlay.styled";

export const Overlay = ({ children }: PropsWithChildren) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);
