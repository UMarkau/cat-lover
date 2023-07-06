import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledCatDetailsModal = {
  Wrapper,
};

export default StyledCatDetailsModal;
