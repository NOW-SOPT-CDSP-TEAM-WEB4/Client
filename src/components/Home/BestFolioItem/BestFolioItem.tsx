import { styled } from "styled-components";

import { IcHeart, IcEmptyHeart } from "../../../assets";
import { BestFolioHomeItemProps } from "../../../types/Home/homeTypes";

function BestFolioItem({
  imgSrc,
  isHearted,
  toggleHeart,
  name,
  companyLogo,
  viewLogo,
  view,
  like,
  greyHeartLogo,
}: BestFolioHomeItemProps) {
  return (
    <BestFolioItemWrapper>
      <ImgContainer>
        <ImgBestFolio src={imgSrc} />
        <HeartIcon onClick={toggleHeart}>{isHearted ? <IcHeart /> : <IcEmptyHeart />}</HeartIcon>
      </ImgContainer>
      <HomeUnderContainer>
        <HomeLogoContainer>
          {companyLogo}
          <HomeCompany>{name}</HomeCompany>
        </HomeLogoContainer>
        <HomeInfoContainer>
          {viewLogo}
          <HomeView>{view}</HomeView>
          {greyHeartLogo}
          <HomeHeart>{like}</HomeHeart>
        </HomeInfoContainer>
      </HomeUnderContainer>
    </BestFolioItemWrapper>
  );
}

export default BestFolioItem;

const BestFolioItemWrapper = styled.div``;

const ImgContainer = styled.section`
  width: 23rem;
  position: relative;
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
  color: ${({ theme }) => theme.colors.b05};
  margin-right: 1.8rem;
`;

const HomeHeart = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
`;
