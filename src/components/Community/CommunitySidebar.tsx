import { useState } from "react";

import { styled } from "styled-components";

import { IcArrowdownSm } from "../../assets";
import { navCategory, outLinkCategory, commuityCategory } from "../../constatns/Community/communityConstants";

import Dropdown from "./Dropdown";

function CommunitySidebar() {
  const [btnActive, setBtnActive] = useState(0);
  const [toggleOpen, setToggleOpen] = useState(false);

  const navBtnActive = (e: number) => {
    setBtnActive(e);
  };

  const toggleBtnActive = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <CommunutySidebarWrapper>
      <SidebarContainer>
        {navCategory.map((item, idx) => (
          <SidebarBtnContainer key={item.content}>
            <SidebarBtn
              type="button"
              key={item.content}
              value={idx}
              className={"btn" + (idx == btnActive ? " active" : "")}
              // 현재는 홈에 바탕색 고정. 클릭마다 바탕색 이벤트를 주고 싶을 경우 0 >> idx로 변경
              onClick={() => {
                navBtnActive(0);
                {
                  item.dropdown === true ? toggleBtnActive() : null;
                }
              }}>
              <NavImg>{item.element}</NavImg>
              {item.content}
              {item.dropdown === true ? (
                <ToggleBtn type="button" className={"btn" + (toggleOpen == true ? " active" : "")} />
              ) : null}
            </SidebarBtn>
            {item.dropdown === true ? (
              <Dropdown isOpen={toggleOpen}>
                {commuityCategory.map((item) => (
                  <DropdownBtn type="button" key={item}>
                    {item}
                  </DropdownBtn>
                ))}
              </Dropdown>
            ) : null}
          </SidebarBtnContainer>
        ))}
      </SidebarContainer>
      <OutLinkBtnContainer>
        {outLinkCategory.map((item) => (
          <OutLinkBtn type="button" key={item.content}>
            <OutLinkImg>{item.element}</OutLinkImg>
            {item.content}
          </OutLinkBtn>
        ))}
      </OutLinkBtnContainer>
    </CommunutySidebarWrapper>
  );
}

export default CommunitySidebar;

const CommunutySidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 24.2rem;
  height: 85.4rem;
  padding: 4.8rem 0.1rem 17.4rem 0;

  border-right: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.g02};
`;

const SidebarContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

const SidebarBtnContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

const SidebarBtn = styled.button`
  display: flex;
  position: relative;
  align-items: flex-start;
  align-self: stretch;

  margin: 0 1.6rem;
  padding: 1.2rem 1.6rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.SemiBold14_22};

  &.active {
    background-color: ${({ theme }) => theme.colors.chips_hover};
  }
`;

const NavImg = styled.div`
  display: flex;

  margin-right: 1.2rem;
`;

const ToggleBtn = styled(IcArrowdownSm)`
  position: absolute;

  right: 0;
  bottom: 1.9rem;

  &.active {
    transform: rotate(180deg);
  }
`;

const DropdownBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  margin: 0 1.6rem;
  padding-left: 4.8rem;

  ${({ theme }) => theme.fonts.Regular14_22};

  gap: 1.6rem;
`;

const OutLinkBtnContainer = styled.section`
  display: flex;
  position: static;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  margin-top: 2.4rem;
  padding: 0 1.6rem;

  gap: 1.2rem 0;
`;

const OutLinkBtn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  padding: 1.6rem 3rem 1.6rem 2rem;

  border-radius: 0.8rem;

  ${({ theme }) => theme.fonts.SemiBold14_17};
  background-color: ${({ theme }) => theme.colors.chips_hover};
`;

const OutLinkImg = styled.div`
  display: flex;

  margin-right: auto;
`;
