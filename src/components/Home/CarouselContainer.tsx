import { useEffect, useState } from "react";

import { styled } from "styled-components";

import { IcCheckLeft, IcCheckRight } from "../../assets";
import IcCsOne from "../../assets/img/img_carousel_1.png";
import IcCsTwo from "../../assets/img/img_carousel_2.png";
import IcCsThree from "../../assets/img/img_carousel_3.png";
import IcCsFour from "../../assets/img/img_carousel_4.png";
import { CarouselImgContainerProps } from "../../types/Home/homeTypes";

const images = [IcCsOne, IcCsTwo, IcCsThree, IcCsFour];
const totalImages = [...images, ...images, ...images];

function CarouselContainer() {
  const [offset, setOffset] = useState(-images.length * 573);
  const [transition, setTransition] = useState(true);
  const imageWidth = 573;

  const handleLeftClick = () => {
    setOffset((prevOffset) => prevOffset + imageWidth);
    setTransition(true);
  };

  const handleRightClick = () => {
    setOffset((prevOffset) => prevOffset - imageWidth);
    setTransition(true);
  };

  const handleTransitionEnd = () => {
    if (offset >= 0) {
      setOffset(-imageWidth * images.length);
      setTransition(false);
    } else if (offset <= -imageWidth * images.length * 2) {
      setOffset(-imageWidth * images.length);
      setTransition(false);
    }
  };

  useEffect(() => {
    if (!transition) {
      const id = setTimeout(() => {
        setTransition(true);
      }, 50);
      return () => clearTimeout(id);
    }
  }, [transition]);

  return (
    <CarouselContainerWrapper>
      <CarouselImgContainer offset={offset} transition={transition} onTransitionEnd={handleTransitionEnd}>
        {totalImages.map((src, index) => (
          <CarouselImage src={src} alt={`Slide ${index}`} key={index} />
        ))}
      </CarouselImgContainer>
      <LeftButton onClick={handleLeftClick}>
        <IcCheckLeft />
      </LeftButton>
      <RightButton onClick={handleRightClick}>
        <IcCheckRight />
      </RightButton>
    </CarouselContainerWrapper>
  );
}

export default CarouselContainer;

const CarouselContainerWrapper = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 30.3rem;
  margin-top: 4rem;
`;

const CarouselImgContainer = styled.section<CarouselImgContainerProps>`
  display: flex;
  transform: translateX(${({ offset }) => offset / 10}rem);
  transition: ${({ transition }) => transition && "transform 0.5s ease-in-out"};
`;

const CarouselImage = styled.img`
  padding-right: 2.3rem;
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
