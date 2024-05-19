import { styled } from "styled-components";

import BestFolioSection from "../../components/Home/BsetFolioSection/BestFolioSection";
import CarouselContainer from "../../components/Home/CarouselContainer";

function Home() {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <HomeBodyWrapper>
        <BestFolioSection />
      </HomeBodyWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
`;

const HomeBodyWrapper = styled.main`
  padding: 0 calc((100vw - 124.4rem) / 2);
`;
