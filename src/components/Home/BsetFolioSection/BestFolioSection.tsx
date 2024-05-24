import { useState, useEffect } from "react";

import { styled } from "styled-components";

import { deleteCreativeLike } from "../../../apis/Home/deleteCreativeLike"; // Ensure this import exists
import { getCreativeInquire } from "../../../apis/Home/getCreativeInquire";
import { postCreativeLike } from "../../../apis/Home/postCreativeLike";
import { IcFrame } from "../../../assets/index";
import ChipsList from "../../common/ChipList/ChipsList";
import { chipsTextList } from "../../common/ChipList/HoemChipsTextList";
import BestFolioItem from "../BestFolioItem/BestFolioItem";

function BestFolioSection() {
  const [bestfolioList, setBestfolioList] = useState([{ name: "", view: -1, like: -1, creativeId: -1, isLike: false }]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreativeData = async () => {
      try {
        const apiData = await getCreativeInquire();
        setBestfolioList(apiData);
      } catch (error) {
        setError("Failed to fetch creative data.");
      }
    };

    fetchCreativeData();
  }, []);

  const toggleHeart = async (index: number) => {
    try {
      const { creativeId, isLike } = bestfolioList[index];
      let response;

      if (isLike) {
        response = await deleteCreativeLike(creativeId);
      } else {
        response = await postCreativeLike(creativeId);
      }

      if (response.status === 200 || response.status === 201) {
        const updatedList = await getCreativeInquire();
        setBestfolioList(updatedList);
      } else {
        throw new Error("하트를 토글하는데 실패했습니다.");
      }
    } catch (error) {
      console.error("Toggle Heart Error:", error);
      setError("하트를 토글하는데 실패했습니다.");
    }
  };

  return (
    <BestFolioSectionWrapper>
      <BestFolioSectionTitle>국내 최고의 포트폴리오를 발견해보세요.</BestFolioSectionTitle>
      <ChipsList chipsTextList={chipsTextList} />
      <ToggleBtnSectionContainer>
        <SortingMethod>정렬방식</SortingMethod>
        <NotefolioPick>노트폴리오 픽</NotefolioPick>
        <IcFrameIcon />
      </ToggleBtnSectionContainer>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <BestFolioItemContainer>
          {bestfolioList.map((item, index) => (
            <BestFolioItem key={item.creativeId} {...item} toggleHeart={() => toggleHeart(index)} />
          ))}
        </BestFolioItemContainer>
      )}
    </BestFolioSectionWrapper>
  );
}

export default BestFolioSection;

const BestFolioSectionWrapper = styled.section`
  padding: 0 calc((100vw - 124.4rem) / 2);
`;

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
`;
