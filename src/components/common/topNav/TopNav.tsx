import { styled } from "styled-components";

import { Logo, IcSearch, IcNew } from "../../../assets/";

function TopNav() {
  return (
    <TopNavWrapper>
      <LeftContainer>
        <LogoIcon />
        <BtnContainer>
          <NavBtn type="button">발견</NavBtn>
          <NavBtn type="button">채용</NavBtn>
          <NavBtn type="button">
            성장/커뮤니티
            <IcNewIcon />
          </NavBtn>
          <NavBtn type="button">에이전시</NavBtn>
        </BtnContainer>
      </LeftContainer>
      <RightContainer>
        <SearchBar>
          <IcSearchIcon />
          <SearchBarInput></SearchBarInput>
        </SearchBar>
        <LoginContainer>
          <LoginBtn type="button">로그인</LoginBtn>
          <SignupBtn type="button">회원가입</SignupBtn>
        </LoginContainer>
      </RightContainer>
    </TopNavWrapper>
  );
}

export default TopNav;

const TopNavWrapper = styled.section`
  display: flex;
  position: sticky;
  top: 4.2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  width: 100%;
  height: 5.6rem;
  padding: 0rem 2.4rem 0rem 2.27rem;

  border-bottom: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.g06};
`;

const LeftContainer = styled.section`
  display: flex;
  height: 56px;
  align-items: center;

  padding: 1.3rem 0rem;
`;

const LogoIcon = styled(Logo)`
  &:hover {
    opacity: 0.8;
  }
`;

const IcNewIcon = styled(IcNew)`
  display: flex;

  padding-left: 0.2rem;

  fill: ${({ theme }) => theme.colors.bb04};
`;

const BtnContainer = styled.section`
  display: flex;
  align-items: flex-start;

  padding-left: 2.2rem;
`;

const NavBtn = styled.button`
  display: flex;
  padding: 0rem 1rem;
  align-items: flex-start;

  ${({ theme }) => theme.fonts.SemiBold15_24};
`;

const RightContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 5.6rem;
  padding: 0.9rem 0rem;
`;

const SearchBar = styled.section`
  display: flex;
  width: 27.7rem;

  margin: 1.6rem;
  padding: 0.55rem 1.3rem 0.55rem 1.2rem;

  background-color: ${({ theme }) => theme.colors.chips_hover};

  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.g05};
  border-radius: 1.9rem;
`;

const IcSearchIcon = styled(IcSearch)`
  display: absolute;

  margin-right: 1.1rem;
  left: 1.2rem;
`;

const SearchBarInput = styled.input`
  display: flex;
  align-items: flex-start;

  padding: 0.3rem 0.2rem 0.4rem 0.2rem;
  border: none;

  background-color: ${({ theme }) => theme.colors.chips_hover};

  outline: none;
`;

const LoginContainer = styled.section`
  display: flex;
  justify-content: space-between;

  min-width: 12.9rem;
`;

const LoginBtn = styled.button`
  text-align: center;

  ${({ theme }) => theme.fonts.Regular13_20};

  &:hover {
    color: ${({ theme }) => theme.colors.bb04};
  }
`;

const SignupBtn = styled.button`
  display: flex;
  align-items: flex-start;

  margin: 0rem 0.5rem 0rem 1.4rem;
  padding: 1.05rem 1.6rem 1.15rem 1.6rem;
  height: 3.8rem;

  border-radius: 1.9rem;

  background: ${({ theme }) => theme.colors.b05};

  ${({ theme }) => theme.fonts.Bold13_16};

  color: ${({ theme }) => theme.colors.w01};
`;
