import { useState } from "react";

import { styled } from "styled-components";

import { ImgHouse, ImgWorkshop, ImgProject, ImgCommuity, ImgContents } from "../../assets";

function CommunitySidebar() {
  const category = [
    { text: "홈", element: <ImgHouse /> },
    { text: "워크숍&세미나", element: <ImgWorkshop /> },
    { text: "프로젝트&챌린지", element: <ImgProject /> },
    { text: "커뮤니티", element: <ImgCommuity /> },
    { text: "콘텐츠", element: <ImgContents /> },
  ];

  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (e: number) => {
    setBtnActive(e);
  };

  return (
    <CommunutySidebarWrapper>
      <SidebarBtnContainer>
        {category.map((item, idx) => {
          return (
            <SidebarBtn
              type="button"
              key={item.text}
              value={idx}
              className={"btn" + (idx == btnActive ? " active" : "")}
              // 현재는 홈에 바탕색 고정. 클릭마다 바탕색 이벤트를 주고 싶을 경우 0 >> idx로 변경
              onClick={() => toggleActive(0)}>
              <ImgContainer>{item.element}</ImgContainer>
              {item.text}
            </SidebarBtn>
          );
        })}
      </SidebarBtnContainer>
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

const ImgContainer = styled.div`
  display: flex;

  margin-right: 1.2rem;
`;
