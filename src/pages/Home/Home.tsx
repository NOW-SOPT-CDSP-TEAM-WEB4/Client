import { styled } from "styled-components";

import CarouselContainer from "../../components/Home/CarouselContainer";

function Home() {
  return (
    <HomeWrapper>
      <CarouselContainer />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
`;
