import { styled } from "styled-components";

import { BestFolioHomeItemProps } from "../../../types/Home/homeTypes";

function BestFolioItem({
  imgSrc,
  company,
  companyLogo,
  viewLogo,
  viewNum,
  heartNum,
  greyHeartLogo,
}: BestFolioHomeItemProps) {
  return (
    <BestFolioItemWrapper>
      <ImgContainer>
        <ImgBestFolio src={imgSrc} />
      </ImgContainer>
      <HomeUnderContainer>
        <HomeLogoContainer>
          {companyLogo}
          <HomeCompany>{company}</HomeCompany>
        </HomeLogoContainer>
        <HomeInfoContainer>
          {viewLogo}
          <HomeView>{viewNum}</HomeView>
          {greyHeartLogo}
          <HomeHeart>{heartNum}</HomeHeart>
        </HomeInfoContainer>
      </HomeUnderContainer>
    </BestFolioItemWrapper>
  );
}

export default BestFolioItem;

const BestFolioItemWrapper = styled.div``;

const ImgContainer = styled.section`
  width: 23rem;
`;

const ImgBestFolio = styled.img`
  width: 23rem;
  height: 23rem;

  object-fit: cover;
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
