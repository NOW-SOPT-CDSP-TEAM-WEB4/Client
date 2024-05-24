import { styled } from "styled-components";

import BestFolioSection from "../../components/Home/BestFolioSection";
import CarouselContainer from "../../components/Home/CarouselContainer";
import DesignerRecruitSection from "../../components/Home/DesignerRecruitSection";
import NotefolioRecommendSection from "../../components/Home/NotefolioRecommendSection";

function Home() {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <HomeBodyWrapper>
        <BestFolioSection />
        <DesignerRecruitSection />
        <NotefolioRecommendSection />
      </HomeBodyWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
`;

const HomeBodyWrapper = styled.div`
  width: 100%;
`;
