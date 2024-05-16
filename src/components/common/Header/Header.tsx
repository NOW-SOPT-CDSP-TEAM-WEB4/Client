import { styled } from "styled-components";

import { IcTopBar, IcSym, IcLogoSim, IcLoud } from "../../../assets/index";

function Header() {
  return (
    <HeaderPageWrapper>
      <IcTopBarBackground>
        <IcTopBarIcon />
      </IcTopBarBackground>
      <BottomContainer>
        <SimItemBox>
          <IcSimIcon />
        </SimItemBox>
        <LogoBox>
          <IcLogoSimIcon />
        </LogoBox>
        <LoudItemBox>
          <IcLoudIcon />
        </LoudItemBox>
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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3.9rem;
  background-color: ${({ theme }) => theme.colors.g01};
`;

const SimItemBox = styled.div`
  display: flex;
  width: 5.4rem;
  height: 3.9rem;
  padding: 1rem 1.6rem;
  align-items: center;
`;

const IcSimIcon = styled(IcSym)`
  width: 2.2rem;
  height: 1.4rem;
`;

const LogoBox = styled.div`
  align-items: center;
  height: 3.9rem;
  padding: 1.2rem 1.6rem;
  display: flex;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.g04};
  border-left: 0.1rem solid ${({ theme }) => theme.colors.g04};
  background-color: ${({ theme }) => theme.colors.w01};
`;

const IcLogoSimIcon = styled(IcLogoSim)`
  width: 5.4rem;
  height: 1rem;
`;

const LoudItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3rem 1.6rem;
`;

const IcLoudIcon = styled(IcLoud)`
  width: 3.6rem;
  height: 0.9rem;
`;
