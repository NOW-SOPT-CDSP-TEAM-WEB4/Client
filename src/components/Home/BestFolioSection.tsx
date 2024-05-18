import { styled } from "styled-components";

import { IcFrame } from "../../assets/index";
import ChipsList from "../common/ChipList/ChipsList";
import { chipsTextList } from "../common/ChipList/constantEx";

function BestFolioSection() {
  return (
    <BestFolioSectionWrapper>
      <BestFolioSectionTitle>국내 최고의 포트폴리오를 발견해보세요.</BestFolioSectionTitle>
      <BestFolioChipContainer>
        <ChipsList chipsTextList={chipsTextList} />
      </BestFolioChipContainer>
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
  letter-spacing: -0.05rem;
`;

const BestFolioChipContainer = styled.section`
  width: 100%;
  height: 6.7rem;
  margin-top: 1rem;
`;

const ToggleBtnSectionContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 3.1rem;
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
  letter-spacing: -0.025rem;
`;

const IcFrameIcon = styled(IcFrame)`
  margin-left: 0.5692rem;
`;

const BestFolioItemContainer = styled.section`
  display: flex;
`;
