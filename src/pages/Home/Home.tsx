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
  padding: 7.5rem 6rem 6rem 4.5rem;
`;
