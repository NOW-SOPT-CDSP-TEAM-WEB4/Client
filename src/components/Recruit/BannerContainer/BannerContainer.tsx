import { styled } from "styled-components";

import { ImgRecruitBanner } from "../../../assets";

function BannerContainer() {
  return (
    <BannerContainerWrapper>
      <ImgRecruitBanner />
      <BannerTextContainer>
        <BannerTitle>디자이너/창작자를 채용 중이신가요?</BannerTitle>
        <BannerSubTitle>국내 1위 포트폴리오 플랫폼 노트폴리오에서 채용 소식을 알려보세요.</BannerSubTitle>
        <PromotionButton>채용 홍보하기</PromotionButton>
        <RecruitHistoryAnchor>나의 채용 공고 내역 보기</RecruitHistoryAnchor>
      </BannerTextContainer>
    </BannerContainerWrapper>
  );
}

export default BannerContainer;

const BannerContainerWrapper = styled.section`
  display: flex;
  justify-content: center;

  position: relative;
  width: 100vw;
  height: 30.4rem;
`;

const BannerTextContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  z-index: 1;

  height: 100%;
`;

const BannerTitle = styled.h1`
  ${({ theme }) => theme.fonts.Bold32_Auto};
  color: ${({ theme }) => theme.colors.b04};
`;

const BannerSubTitle = styled.h2`
  margin-top: 1.4rem;

  ${({ theme }) => theme.fonts.Regular16_Auto};
  color: ${({ theme }) => theme.colors.b04};
`;

const PromotionButton = styled.button`
  width: 24rem;
  height: 6.4rem;
  margin-top: 3.2rem;

  background-color: #282a32;
  border-radius: 3.2rem;

  color: ${({ theme }) => theme.colors.w01};

  ${({ theme }) => theme.fonts.Regular15_Auto};
`;

const RecruitHistoryAnchor = styled.a`
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.b10};

  text-decoration: underline;
  ${({ theme }) => theme.fonts.Regular13_Auto};

  &:hover {
    cursor: pointer;
  }
`;
