import { styled } from "styled-components";

import BestFolioContainer from "../../components/Home/BestFolioContainer";
import CarouselContainer from "../../components/Home/CarouselContainer";

function Home() {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <BestFolioContainer />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
`;
