import { styled } from "styled-components";

function DesignerRecruitSection() {
  return (
    <DesignerRecruitSectionWrapper>
      <DesignerRecruitSectionTitle>디자이너 채용 정보는 노트폴리오에서!</DesignerRecruitSectionTitle>
      <DesignerRecruitItemContainer></DesignerRecruitItemContainer>
    </DesignerRecruitSectionWrapper>
  );
}

export default DesignerRecruitSection;

const DesignerRecruitSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 0 calc((100vw - 124.4rem) / 2);
  background-color: ${({ theme }) => theme.colors.b03};
`;

const DesignerRecruitSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold28_36};
  color: ${({ theme }) => theme.colors.w01};
  margin-top: 3.5rem;
`;

const DesignerRecruitItemContainer = styled.article`
  display: flex;
  column-gap: 2.2rem;

  width: 100%;
  margin-top: 2.6rem;
`;
