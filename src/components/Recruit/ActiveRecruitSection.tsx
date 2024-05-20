import { styled } from "styled-components";

import { activeRecruitList } from "../../constants/Recruit/recruitConstants";

import ActiveRecruitItem from "./ActiveRecruitItem";

function ActiveRecruitSection() {
  return (
    <ActiveRecruitSectionWrapper>
      <ActiveRecruitSectionTitle>적극적으로 채용 중인 회사 👀</ActiveRecruitSectionTitle>
      <ActiveRecruitItemContainer>
        {activeRecruitList.map((item) => (
          <ActiveRecruitItem key={item.id} {...item} />
        ))}
      </ActiveRecruitItemContainer>
    </ActiveRecruitSectionWrapper>
  );
}

export default ActiveRecruitSection;

const ActiveRecruitSectionWrapper = styled.section`
  width: 100%;
  padding: 4.8rem 0 6.4rem 0;
`;

const ActiveRecruitSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold20_28};
  color: ${({ theme }) => theme.colors.b03};
`;

const ActiveRecruitItemContainer = styled.article`
  display: flex;
  column-gap: 3.2rem;

  width: 100%;
  margin-top: 2.4rem;
`;
