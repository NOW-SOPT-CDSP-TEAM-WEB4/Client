import { styled } from "styled-components";

function NotefolioRecommendSection() {
  return (
    <NotefolioRecommendSectionWrapper>
      <NotefolioRecommendSectionTitle>노트폴리오 추천, HOT 크리에이터</NotefolioRecommendSectionTitle>
      <NotefolioRecommendItemContainer></NotefolioRecommendItemContainer>
    </NotefolioRecommendSectionWrapper>
  );
}

export default NotefolioRecommendSection;

const NotefolioRecommendSectionWrapper = styled.section`
  width: 100%;
  margin-top: 4rem;
  padding: 0 calc((100vw - 124.4rem) / 2);
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
