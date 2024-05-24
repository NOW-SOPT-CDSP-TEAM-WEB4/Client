import { styled } from "styled-components";

import { notefolioRecommendList } from "../../constants/Home/notefolioConstants";

import NotefolioRecommendItem from "./NotefolioRecommendItem";

function NotefolioRecommendSection() {
  return (
    <NotefolioRecommendSectionWrapperBox>
      <NotefolioRecommendSectionWrapper>
        <NotefolioRecommendSectionTitle>노트폴리오 추천, HOT 크리에이터</NotefolioRecommendSectionTitle>
        <NotefolioRecommendItemContainer>
          {notefolioRecommendList.map((item) => (
            <NotefolioRecommendItem key={item.id} {...item} />
          ))}
        </NotefolioRecommendItemContainer>
      </NotefolioRecommendSectionWrapper>
    </NotefolioRecommendSectionWrapperBox>
  );
}

export default NotefolioRecommendSection;

const NotefolioRecommendSectionWrapperBox = styled.div`
  background-color: ${({ theme }) => theme.colors.chips_hover};
`;

const NotefolioRecommendSectionWrapper = styled.section`
  width: 100%;
  padding: 0 calc((100vw - 124.4rem) / 2);
  padding-top: 4rem;
`;

const NotefolioRecommendSectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.b03};
  ${({ theme }) => theme.fonts.Bold28_36};
  letter-spacing: -0.05rem;
`;

const NotefolioRecommendItemContainer = styled.article`
  display: flex;
  column-gap: 2.3rem;

  width: 100%;
  margin-top: 2rem;
`;
