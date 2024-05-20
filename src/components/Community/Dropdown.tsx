import React from "react";

import { styled } from "styled-components";

const Dropdown = (props: { isOpen: boolean; children: React.ReactNode }) => {
  return props.isOpen ? <DropdownComponent>{props.children}</DropdownComponent> : null;
};

export default Dropdown;

const DropdownComponent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 0 1.6rem 0;
  gap: 1.6rem;
`;
