import { styled } from "styled-components";

import { IcTopBar, IcSym, IcLogoSim, IcLoud } from "../../../assets/index";

function Header() {
  return (
    <HeaderPageWrapper>
      <IcTopBarBackground>
        <IcTopBarIcon />
      </IcTopBarBackground>
      <BottomContainer>
        <IcSymIcon />
        <IcLogoSimIcon />
        <IcLoudIcon />
      </BottomContainer>
    </HeaderPageWrapper>
  );
}

export default Header;

const HeaderPageWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IcTopBarBackground = styled.div`
  width: 100%;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.colors.o02};
`;

const IcTopBarIcon = styled(IcTopBar)`
  width: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.7rem;
  flex-direction: row;
`;

const IcSymIcon = styled(IcSym)`
  width: 100%;
`;

const IcLogoSimIcon = styled(IcLogoSim)`
  width: 100%;
`;

const IcLoudIcon = styled(IcLoud)`
  width: 100%;
`;
