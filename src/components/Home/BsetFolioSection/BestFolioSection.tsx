import { styled } from "styled-components";

import { IcFrame } from "../../../assets/index";
import { bestfolioHomeList } from "../../../constants/Home/homeConstants";
import ChipsList from "../../common/ChipList/ChipsList";
import { chipsTextList } from "../../common/ChipList/constantEx";
import BestFolioItem from "../BestFolioItem/BestFolioItem";

function BestFolioSection() {
  return (
    <BestFolioSectionWrapper>
      <BestFolioSectionTitle>국내 최고의 포트폴리오를 발견해보세요.</BestFolioSectionTitle>
      <ChipsList chipsTextList={chipsTextList} />
      <ToggleBtnSectionContainer>
        <SortingMethod>정렬방식</SortingMethod>
        <NotefolioPick>노트폴리오 픽</NotefolioPick>
        <IcFrameIcon />
      </ToggleBtnSectionContainer>
      <BestFolioItemContainer>
        {bestfolioHomeList.map((item) => (
          <BestFolioItem key={item.id} {...item} />
        ))}
      </BestFolioItemContainer>
    </BestFolioSectionWrapper>
  );
}

export default BestFolioSection;

const BestFolioSectionWrapper = styled.section``;

const BestFolioSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.Bold28_36};
  color: ${({ theme }) => theme.colors.b03};
  letter-spacing: -0.05rem;
  margin-top: 7.5rem;
  margin-bottom: 2.1rem;
`;

const ToggleBtnSectionContainer = styled.section`
  display: flex;
  align-items: center;
  margin-top: 5.1rem;
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

const BestFolioItemContainer = styled.article`
  display: flex;
  column-gap: 2.1rem;

  margin-top: 2.1rem;
`;
