import { styled } from "styled-components";

import { IcFrame } from "../../assets/index";

function BestFolioSection() {
  return (
    <BestFolioSectionWrapper>
      <BestFolioSectionTitle>국내 최고의 포트폴리오를 발견해보세요.</BestFolioSectionTitle>
      <BestFolioChipContainer></BestFolioChipContainer>
      <ToggleBtnSectionContainer>
        <SortingMethod>정렬방식</SortingMethod>
        <NotefolioPick>노트폴리오 픽</NotefolioPick>
        <IcFrameIcon />
      </ToggleBtnSectionContainer>
      <BestFolioItemContainer></BestFolioItemContainer>
    </BestFolioSectionWrapper>
  );
}

export default BestFolioSection;

const BestFolioSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const BestFolioSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold28_36};
  color: ${({ theme }) => theme.colors.b03};
`;

const BestFolioChipContainer = styled.section`
  display: flex;
`;

const ToggleBtnSectionContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 3.45rem;
  gap: 0.8rem;
  align-self: stretch;
`;

const SortingMethod = styled.p`
  ${({ theme }) => theme.fonts.SemiBold14_17};
  color: ${({ theme }) => theme.colors.b09};
`;

const NotefolioPick = styled.p`
  ${({ theme }) => theme.fonts.SemiBold15_24};
  color: ${({ theme }) => theme.colors.b03};
`;

const IcFrameIcon = styled(IcFrame)`
  margin-left: 0.5692rem;
`;

const BestFolioItemContainer = styled.section`
  display: flex;
`;
