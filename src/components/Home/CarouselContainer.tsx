import { useState } from "react";

import { styled } from "styled-components";

import { IcCheckLeft, IcCheckRight } from "../../assets";
import IcCsOne from "../../assets/img/img_carousel_1.png";
import IcCsTwo from "../../assets/img/img_carousel_2.png";
import IcCsThree from "../../assets/img/img_carousel_3.png";
import IcCsFour from "../../assets/img/img_carousel_4.png";

interface CarouselImgContainerProps {
  offset: number;
  transition: boolean;
}

function CarouselContainer() {
  const [offset, setOffset] = useState(0);
  const [transition, setTransition] = useState(true);
  const imageCount = 4;
  const imageWidth = 20;

  const handleLeftClick = () => {
    setOffset((prevOffset) => prevOffset + imageWidth);
    setTransition(true);
  };

  const handleRightClick = () => {
    setOffset((prevOffset) => prevOffset - imageWidth);
    setTransition(true);
  };

  const handleTransitionEnd = () => {
    if (offset > 0) {
      setOffset(-(imageWidth * (imageCount - 1)));
    } else if (offset <= -imageWidth * (imageCount + 1)) {
      setOffset(0);
    }
    setTransition(false);
  };

  return (
    <CarouselContainerWrapper>
      <CarouselImgContainer offset={offset} transition={transition} onTransitionEnd={handleTransitionEnd}>
        <img src={IcCsFour} alt="Four" />
        <img src={IcCsOne} alt="One" />
        <img src={IcCsTwo} alt="Two" />
        <img src={IcCsThree} alt="Three" />
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
  position: relative;
  margin-top: 4rem;
  height: 30.3rem;
  width: 100vw;
`;

const CarouselImgContainer = styled.section<CarouselImgContainerProps>`
  display: flex;
  gap: 2.3rem;
  transform: translateX(${(props) => props.offset}%);
  transition: ${(props) => (props.transition ? "transform 0.5s ease-in-out" : "none")};
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
