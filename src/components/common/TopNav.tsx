import React, { KeyboardEvent, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

import { IcNew, IcSearch, Logo } from "../../assets";

function TopNav() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const saveSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?keyword=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <TopNavWrapper>
      <LeftContainer>
        <HomeBtn onClick={() => navigate("/")}>
          <Logo />
        </HomeBtn>
        <BtnContainer>
          <NavBtn type="button">발견</NavBtn>
          <NavBtn type="button" onClick={() => navigate("/recruit")}>
            채용
          </NavBtn>
          <NavBtn type="button" onClick={() => navigate("/community")}>
            성장/커뮤니티
            <IcNewIcon />
          </NavBtn>
          <NavBtn type="button">에이전시</NavBtn>
        </BtnContainer>
      </LeftContainer>
      <RightContainer>
        {searchParams.get("keyword") === null && (
          <SearchBar>
            <IcSearchIcon />
            <SearchBarInput
              placeholder="190,000개 이상의 크리에이티브 검색"
              value={searchQuery}
              onChange={saveSearchQuery}
              onKeyDown={(e) => activeEnter(e)}
            />
          </SearchBar>
        )}
        <LoginContainer>
          <LoginBtn type="button">로그인</LoginBtn>
          <SignupBtn type="button">회원가입</SignupBtn>
        </LoginContainer>
      </RightContainer>
    </TopNavWrapper>
  );
}

export default TopNav;

const HomeBtn = styled.button`
  &:hover {
    opacity: 0.8;
  }
`;

const TopNavWrapper = styled.section`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 5.6rem;
  padding: 0 2.4rem 0 2.27rem;

  background-color: ${({ theme }) => theme.colors.w01};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-bottom: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.g06};
`;

const LeftContainer = styled.section`
  display: flex;
  height: 56px;
  align-items: center;

  padding: 1.3rem 0;
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
  padding: 0 1rem;
  align-items: flex-start;

  ${({ theme }) => theme.fonts.SemiBold15_24};

  &:hover {
    opacity: 0.8;
  }
`;

const RightContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  height: 5.6rem;
  padding: 0.9rem 0;
`;

const SearchBar = styled.section`
  display: flex;
  width: 27.7rem;
  margin: 1.6rem;
  padding: 0.55rem 1.3rem 0.55rem 1.2rem;
  border: 0.1rem solid;

  background-color: ${({ theme }) => theme.colors.chips_hover};
  border-color: ${({ theme }) => theme.colors.g05};
  border-radius: 1.9rem;
`;

const IcSearchIcon = styled(IcSearch)`
  display: absolute;
  left: 1.2rem;

  margin-right: 1.1rem;
`;

const SearchBarInput = styled.input`
  display: flex;
  align-items: flex-start;

  width: 100%;
  padding-top: 0.35rem;
  border: none;

  background-color: ${({ theme }) => theme.colors.chips_hover};

  ${({ theme }) => theme.fonts.Regular13_Auto};

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

  height: 3.8rem;
  margin: 0 0.5rem 0 1.4rem;
  padding: 1.05rem 1.6rem 1.15rem 1.6rem;

  border-radius: 1.9rem;

  background: ${({ theme }) => theme.colors.b05};

  ${({ theme }) => theme.fonts.Bold13_16};

  color: ${({ theme }) => theme.colors.w01};
`;
