import { useState } from "react";

import { styled } from "styled-components";

function CommunitySidebar() {
  const category = ["홈", "워크숍&세미나", "프로젝트&챌린지", "커뮤니티", "콘텐츠"];

  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (e: number) => {
    setBtnActive(e);
  };

  return (
    <CommunutySidebarWrapper>
      {category.map((item, idx) => {
        return (
          <SidebarBtn
            type="button"
            key={item}
            value={idx}
            className={"btn" + (idx == btnActive ? " active" : "")}
            // 현재는 홈에 바탕색 고정. 클릭마다 바탕색 이벤트를 주고 싶을 경우 0 >> idx로 변경
            onClick={() => toggleActive(0)}>
            {item}
          </SidebarBtn>
        );
      })}
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

const SidebarBtn = styled.button`
  display: flex;
  flex-direction: column;
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
