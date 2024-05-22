import { useState, useRef, useEffect } from "react";

import styled from "styled-components";

import { IcArrowleftRg, IcArrowrightRg } from "../../../assets";
import { carouselTemList } from "../../../constants/Community/communityConstants";
import { CarouselTemProps } from "../../../types/Community/communityProps";

function CommunityCarousel() {
  const [currIndex, setCurrIndex] = useState(0);
  const [currList, setCurrList] = useState<CarouselTemProps[]>([]);

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselTemList.length !== 0) {
      const startData = carouselTemList[0];
      const endData = carouselTemList[carouselTemList.length - 1];
      const newList = [endData, ...carouselTemList, startData];

      setCurrList(newList);
    }
  }, [carouselTemList]);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${currIndex}00%)`;
    }
  }, [currIndex]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction;

    if (newIndex === carouselTemList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselTemList.length);
    }

    setCurrIndex((prev) => prev + direction);

    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  return (
    <CommunityCarouselWrapper>
      <SwipeLeft type="button" onClick={() => handleSwipe(-1)}>
        <IcArrowleftRg />
      </SwipeLeft>
      <SwipeRight type="button" onClick={() => handleSwipe(1)}>
        <IcArrowrightRg />
      </SwipeRight>
      <Carousel ref={carouselRef}>
        {currList.map((item) => (
          <CarouselItem key={item.itemId}>
            <CarouselImg src={item.src} />
            {/* <Title>{item.title}</Title>
            <Content>{item.content}</Content> */}
            <ItemNum>
              {item.itemId} / {currList.length - 2}
            </ItemNum>
          </CarouselItem>
        ))}
      </Carousel>
    </CommunityCarouselWrapper>
  );
}

export default CommunityCarousel;

const CommunityCarouselWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 1.2rem;

  overflow: hidden;
`;

// 같이 export 된 이미지 말고 따로 쓸 때 사용!!
// const Title = styled.div`
//   display: flex;
//   position: absolute;

//   margin: 7.6rem 4rem;
//   bottom: 0;

//   ${({ theme }) => theme.fonts.Bold32_Auto};
//   color: ${({ theme }) => theme.colors.w01};

//   z-index: 2;
// `;

// const Content = styled.div`
//   display: flex;
//   position: absolute;

//   margin: 4rem;
//   bottom: 0;

//   ${({ theme }) => theme.fonts.SemiBold16_24};
//   color: ${({ theme }) => theme.colors.w01};

//   z-index: 2;
// `;

const ItemNum = styled.div`
  display: flex;
  position: absolute;

  margin: 42rem 0 0 76rem;

  ${({ theme }) => theme.fonts.Bold14_22};
  color: ${({ theme }) => theme.colors.w01};

  writing-mode: horizontal-tb;
  z-index: 2;
  overflow: hidden;
`;

const SwipeLeft = styled.button`
  display: block;
  position: absolute;

  padding: 1.3rem;
  width: 4.2rem;
  height: 4.2rem;
  left: 0;
  top: 45%;

  border: 0.1rem solid;
  border-radius: 2.1rem;
  border-color: ${({ theme }) => theme.colors.g03};

  background-color: ${({ theme }) => theme.colors.w01};

  z-index: 1;
`;

const SwipeRight = styled.button`
  display: block;
  position: absolute;

  padding: 1.3rem;
  width: 4.2rem;
  height: 4.2rem;
  right: 0;
  top: 45%;

  border: 0.1rem solid;
  border-radius: 2.1rem;
  border-color: ${({ theme }) => theme.colors.g03};

  background-color: ${({ theme }) => theme.colors.w01};

  z-index: 2;
`;

const Carousel = styled.section`
  display: flex;
`;

const CarouselItem = styled.section`
  display: flex;
`;

const CarouselImg = styled.img`
  display: flex;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 64.69%, rgba(0, 0, 0, 0.85) 100%);
`;
