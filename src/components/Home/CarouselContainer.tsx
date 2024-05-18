import { useState } from "react";

import { styled } from "styled-components";

import { IcCheckLeft, IcCheckRight, IcCsOne, IcCsTwo, IcCsThree, IcCsFour } from "../../assets";

interface CarouselImgContainerProps {
  offset: number;
}

function CarouselContainer() {
  const [offset, setOffset] = useState(0);
  const imageCount = 4;
  const imageWidth = 23;

  const handleLeftClick = () => {
    setOffset((prevOffset) => Math.max(prevOffset + imageWidth, 0));
  };

  const handleRightClick = () => {
    setOffset((prevOffset) => Math.max(prevOffset - imageWidth, -(imageCount - 1) * imageWidth));
  };

  return (
    <CarouselContainerWrapper>
      <CarouselImgContainer offset={offset}>
        <IcOne />
        <IcTwo />
        <IcThree />
        <IcFour />
      </CarouselImgContainer>
      <LeftButton onClick={handleLeftClick}>
        <IcLeftBtn />
      </LeftButton>
      <RightButton onClick={handleRightClick}>
        <IcRightBtn />
      </RightButton>
    </CarouselContainerWrapper>
  );
}

export default CarouselContainer;

const CarouselContainerWrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  height: 30.3rem;
  width: 100%;
`;

const CarouselImgContainer = styled.section<CarouselImgContainerProps>`
  display: flex;
  gap: 2.3rem;
  transform: translateX(${(props) => props.offset}%);
  transition: transform 0.5s ease-in-out;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
`;

const RightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

const IcLeftBtn = styled(IcCheckLeft)``;

const IcRightBtn = styled(IcCheckRight)``;

const IcOne = styled(IcCsOne)`
  flex: 0 0 23%;
`;

const IcTwo = styled(IcCsTwo)`
  flex: 0 0 23%;
`;

const IcThree = styled(IcCsThree)`
  flex: 0 0 23%;
`;

const IcFour = styled(IcCsFour)`
  flex: 0 0 23%;
`;
