import { styled } from "styled-components";

import { NotefolioRecommendItemProps } from "../../../types/Home/homeTypes";

function NotefolioRecommendItem({ imgSrc, companyLogo, company, content }: NotefolioRecommendItemProps) {
  return (
    <NotefolioRecommendItemWrapper>
      <NotefolioRecommendItemTopContainer>
        {companyLogo}
        <NotefolioRecommendLetterContainer>
          <RecommendCompany>{company}</RecommendCompany>
          <RecommendContent>{content}</RecommendContent>
        </NotefolioRecommendLetterContainer>
      </NotefolioRecommendItemTopContainer>
      <ImgContainer>
        {imgSrc.map((src, index) => (
          <ImgNotefolioRecommend key={index} src={src} alt={`img-${index}`} />
        ))}
      </ImgContainer>
    </NotefolioRecommendItemWrapper>
  );
}

export default NotefolioRecommendItem;

const NotefolioRecommendItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.1rem;
  height: 17.1rem;
  padding: 2.3175rem;
  margin-bottom: 4.5rem;
  background-color: ${({ theme }) => theme.colors.w01};
`;

const NotefolioRecommendItemTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21rem;
  gap: 0.8rem;
  padding: 0 6rem 0 0.6rem;
`;

const NotefolioRecommendLetterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 18.4rem;
`;

const RecommendCompany = styled.p`
  color: ${({ theme }) => theme.colors.b03};
  ${({ theme }) => theme.fonts.Bold14_22};
`;

const RecommendContent = styled.p`
  color: ${({ theme }) => theme.colors.b05};
  ${({ theme }) => theme.fonts.Regular11_13};
`;

const ImgContainer = styled.div`
  display: flex;
  margin-top: 2.277rem;
  gap: 0.5rem;
`;

const ImgNotefolioRecommend = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
