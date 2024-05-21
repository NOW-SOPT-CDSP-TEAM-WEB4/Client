import React from "react";

import { styled } from "styled-components";

import CommunityArticleItem from "./CommunityArticleItem";
import CommunityNavItem from "./CommunityNavItem";

function GrowthSection() {
  return (
    <GrowthSectionWrapper>
      <TitleSection>
        <TitleText>노트폴리오는 창작자와 디자이너의</TitleText>
        <TitleText>모든 성장을 돕습니다.</TitleText>
      </TitleSection>
      <CommunityCarousel />
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

const CommunityCarousel = styled.section`
  display: flex;

  margin-bottom: 2rem;
  width: 84.6rem;
  height: 47.6rem;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.69%, rgba(0, 0, 0, 0.85) 100%);
  border: 0.1rem solid;
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
