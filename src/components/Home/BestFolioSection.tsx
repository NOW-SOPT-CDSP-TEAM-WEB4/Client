import { styled } from "styled-components";

function BestFolioSection() {
  return (
    <BestFolioSectionWrapper>
      <BestFolioSectionTitle>국내 최고의 포트폴리오를 발견해보세요.</BestFolioSectionTitle>
      <BestFolioChipContainer></BestFolioChipContainer>
    </BestFolioSectionWrapper>
  );
}

export default BestFolioSection;

const BestFolioSectionWrapper = styled.section`
  display: flex;
`;

const BestFolioSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold28_36};
  color: ${({ theme }) => theme.colors.b03};
`;

const BestFolioChipContainer = styled.section`
  display: flex;
`;
