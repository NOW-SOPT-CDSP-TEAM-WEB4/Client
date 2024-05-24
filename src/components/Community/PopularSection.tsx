import { useEffect, useState } from "react";

import { styled } from "styled-components";

import { getWorkshop } from "../../apis/Community/getWorkshop";
import ImgPopularBottom from "../../assets/img/img_popular_bottom.png";
import { WorkshopItemProps } from "../../types/Community/communityProps";

import PopularItem from "./PopularItem";

function PopularSection() {
  const [workshopList, setWorkshopList] = useState<WorkshopItemProps[]>([]);

  useEffect(() => {
    const getWorkshopList = async () => {
      try {
        const apiGet = await getWorkshop();
        const newList = [];
        for (let i = 0; i < 3; i++) {
          const apiItem = apiGet.find((api: WorkshopItemProps) => api.workshopId === i + 1);
          newList.push(apiItem);
        }
        setWorkshopList(newList);
      } catch (error) {
        console.log(error);
      }
    };

    getWorkshopList();
  }, []);

  return (
    <PopularSectionWrapper>
      <Title>전 기수 조기 완판! 인기 워크숍</Title>
      <PopularContainer>
        {workshopList.map((item) => (
          <PopularItem key={item.workshopId} {...item} />
        ))}
      </PopularContainer>
      <BottomImg src={ImgPopularBottom} />
    </PopularSectionWrapper>
  );
}

export default PopularSection;

const PopularSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  padding-top: 2.4rem;
`;

const PopularContainer = styled.section`
  display: flex;

  gap: 2.4rem;
`;

const Title = styled.div`
  display: flex;

  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Bold24_32}
`;

const BottomImg = styled.img`
  display: flex;

  margin-top: 12rem;
  padding: 0 2.4rem;
`;
