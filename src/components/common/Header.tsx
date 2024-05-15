import { styled } from "styled-components";

import { IcTopBar } from "../../assets/index";

function Header() {
  return (
    <HeaderPageWrapper>
      <IcTopBarBackground>
        <IcTopBarIcon />
      </IcTopBarBackground>
    </HeaderPageWrapper>
  );
}

export default Header;

const HeaderPageWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IcTopBarBackground = styled.div`
  width: 100%;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.colors.o02};
`;

const IcTopBarIcon = styled(IcTopBar)`
  width: 100%;
`;
