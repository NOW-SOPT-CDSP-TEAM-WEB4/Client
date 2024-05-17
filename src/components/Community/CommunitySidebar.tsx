import { useState } from "react";

import { styled } from "styled-components";

import { ImgHouse, ImgWorkshop, ImgProject, ImgCommuity, ImgContents, ImgDesign, ImgOpen } from "../../assets";

function CommunitySidebar() {
  const navCategory = [
    { content: "홈", element: <ImgHouse /> },
    { content: "워크숍&세미나", element: <ImgWorkshop /> },
    { content: "프로젝트&챌린지", element: <ImgProject /> },
    { content: "커뮤니티", element: <ImgCommuity /> },
    { content: "콘텐츠", element: <ImgContents /> },
  ];

  const outLinkCategory = [
    { content: "디자이너 생존 테스트", element: <ImgDesign /> },
    { content: "디자이너 오픈 채팅방", element: <ImgOpen /> },
  ];

  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (e: number) => {
    setBtnActive(e);
  };

  return (
    <CommunutySidebarWrapper>
      <SidebarBtnContainer>
        {navCategory.map((item, idx) => {
          return (
            <SidebarBtn
              type="button"
              key={item.content}
              value={idx}
              className={"btn" + (idx == btnActive ? " active" : "")}
              // 현재는 홈에 바탕색 고정. 클릭마다 바탕색 이벤트를 주고 싶을 경우 0 >> idx로 변경
              onClick={() => toggleActive(0)}>
              <NavImg>{item.element}</NavImg>
              {item.content}
            </SidebarBtn>
          );
        })}
      </SidebarBtnContainer>
      <OutLinkBtnContainer>
        {outLinkCategory.map((item) => {
          return (
            <OutLinkBtn type="button" key={item.content}>
              <OutLinkImg>{item.element}</OutLinkImg>
              {item.content}
            </OutLinkBtn>
          );
        })}
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
`;

const SidebarBtnContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SidebarBtn = styled.button`
  display: flex;
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

const OutLinkBtnContainer = styled.section`
  display: flex;
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

  ${({ theme }) => theme.fonts.SemiBold14_17};
`;

const OutLinkImg = styled.div`
  display: flex;

  margin-right: auto;
`;
