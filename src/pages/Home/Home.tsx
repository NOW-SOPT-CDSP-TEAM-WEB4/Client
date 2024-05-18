import { styled } from "styled-components";

import BestFolio from "../../components/Home/BestFolio";
import CarouselContainer from "../../components/Home/CarouselContainer";

function Home() {
  return (
    <HomeWrapper>
      <CarouselContainer />
      <BestFolio />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
`;
