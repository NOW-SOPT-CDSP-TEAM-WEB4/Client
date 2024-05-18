import { styled } from "styled-components";

import { IcCheckLeft, IcCheckRight } from "../../assets";

function CarouselContainer() {
  return (
    <CarouselContainerWrapper>
      <LeftButton>
        <IcLeftBtn />
      </LeftButton>
      <RightButton>
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

  height: 30.3rem;
  width: 100%;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  transform: translateY(5%);
`;

const RightButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;

  transform: translateY(5%);
`;

const IcLeftBtn = styled(IcCheckLeft)``;

const IcRightBtn = styled(IcCheckRight)``;
