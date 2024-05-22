import React from "react";

import { styled } from "styled-components";

import CommunityArticleItem from "./CommunityArticleItem";
import CommunityCarousel from "./CommunityCarousel";
import CommunityNavItem from "./CommunityNavItem";

function GrowthSection() {
  return (
    <GrowthSectionWrapper>
      <TitleSection>
        <TitleText>노트폴리오는 창작자와 디자이너의</TitleText>
        <TitleText>모든 성장을 돕습니다.</TitleText>
      </TitleSection>
      <CommunityCarouselContainer>
        <CommunityCarousel />
      </CommunityCarouselContainer>
      <CommunityArticleSection>
        <CommunityArticleItem />
      </CommunityArticleSection>
      <CommunityNavSection>
        <CommunityNavItem />
      </CommunityNavSection>
    </GrowthSectionWrapper>
  );
}

export default GrowthSection;

const GrowthSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 4rem;
`;

const TitleText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.Bold40_56};
`;

const CommunityCarouselContainer = styled.section`
  display: flex;
  flex-shrink: 0;

  margin-bottom: 2rem;
  width: 84.6rem;
  height: 47.6rem;
`;

const CommunityArticleSection = styled.article`
  display: flex;
  flex-direction: row;

  padding-bottom: 3.1rem;
`;

const CommunityNavSection = styled.section`
  display: flex;
  flex-direction: row;
`;
