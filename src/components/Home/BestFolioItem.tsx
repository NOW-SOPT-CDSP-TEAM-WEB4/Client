import { styled } from "styled-components";

import { IcEmptyHeart, IcGreyHeart, IcHeart, IcView } from "../../assets";
import { bestFolioImgList, bestfolioIconList } from "../../constants/Home/homeConstants";
import { BestFolioHomeItemProps } from "../../types/Home/homeTypes";

function BestFolioItem({ isLike, name, view, like, creativeId, toggleHeart }: BestFolioHomeItemProps) {
  return (
    <BestFolioItemWrapper>
      <ImgContainer>
        <ImgBestFolio src={bestFolioImgList[creativeId - 1]} />
        <HeartIcon onClick={toggleHeart}>{isLike ? <IcHeart /> : <IcEmptyHeart />}</HeartIcon>
      </ImgContainer>
      <HomeUnderContainer>
        <HomeLogoContainer>
          {bestfolioIconList[creativeId - 1]}
          <HomeCompany>{name}</HomeCompany>
        </HomeLogoContainer>
        <HomeInfoContainer>
          <IcView />
          <HomeView>{view}</HomeView>
          <IcGreyHeart />
          <HomeHeart>{like}</HomeHeart>
        </HomeInfoContainer>
      </HomeUnderContainer>
    </BestFolioItemWrapper>
  );
}

export default BestFolioItem;

const BestFolioItemWrapper = styled.div``;

const ImgContainer = styled.section`
  position: relative;
  width: 23rem;
`;

const ImgBestFolio = styled.img`
  width: 23rem;
  height: 23rem;
  object-fit: cover;
`;

const HeartIcon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const HomeUnderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.138rem;
`;

const HomeLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const HomeCompany = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
`;

const HomeInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeView = styled.h3`
  margin-right: 1.8rem;

  color: ${({ theme }) => theme.colors.b05};
`;

const HomeHeart = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
`;
