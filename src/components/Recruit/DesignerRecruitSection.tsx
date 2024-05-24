import { styled } from "styled-components";

import { chipsTextList, designerRecruitList } from "../../constants/Recruit/recruitConstants";
import ChipsList from "../common/ChipsList";

import DesignerRecruitItem from "./DesignerRecruitItem";

function DesignerRecruitSection() {
  return (
    <DesignerRecruitSectionWrapper>
      <DesignerRecruitSectionTitle>디자인 포지션 채용 공고 💼</DesignerRecruitSectionTitle>
      <ChipsList chipsTextList={chipsTextList} />
      <RecruitCountText>
        총 <RecruitCount>391</RecruitCount>개의 채용 공고
      </RecruitCountText>
      <DesignerRecruitItemContainer>
        {designerRecruitList.map((item) => (
          <DesignerRecruitItem key={item.id} {...item} />
        ))}
      </DesignerRecruitItemContainer>
    </DesignerRecruitSectionWrapper>
  );
}

export default DesignerRecruitSection;

const DesignerRecruitSectionWrapper = styled.section`
  width: 100%;
  padding: 1.3rem 0 20rem 0;
`;

const DesignerRecruitSectionTitle = styled.h2`
  margin-bottom: 2.4rem;

  color: ${({ theme }) => theme.colors.b03};

  ${({ theme }) => theme.fonts.Bold20_28};
`;

const RecruitCountText = styled.h3`
  margin-top: 4rem;

  color: ${({ theme }) => theme.colors.b01};

  ${({ theme }) => theme.fonts.SemiBold16_24};
`;

const RecruitCount = styled.span`
  color: ${({ theme }) => theme.colors.bb04};

  ${({ theme }) => theme.fonts.SemiBold16_24};
`;

const DesignerRecruitItemContainer = styled.article`
  display: grid;
  margin-top: 2.4rem;
  gap: 6.4rem 2.4rem;
  grid-template-columns: repeat(6, 1fr);
`;
