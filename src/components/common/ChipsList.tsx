import { useCallback, useRef, useState } from "react";

import { styled } from "styled-components";

import { IcNextButton } from "../../assets";
import { ChipsListProps } from "../../types/common/chipsListType";
import { throttle } from "../../utils/throttle";

import Chip from "./Chip";

function ChipsList({ chipsTextList }: ChipsListProps) {
  const [selectedOption, setSelectedOption] = useState("전체");
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const chipsListBoxRef = useRef<HTMLDivElement>(null);

  const scrollToLeft = () => {
    const firstChild = chipsListBoxRef.current?.firstElementChild;

    if (firstChild) {
      firstChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const scrollToRight = () => {
    const lastChild = chipsListBoxRef.current?.lastElementChild;

    if (lastChild) {
      lastChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  const handleScroll = () => {
    const currentScrollPos = chipsListBoxRef.current?.scrollLeft ?? 0;
    const listBoxWidth = chipsListBoxRef.current?.scrollWidth ?? 0;
    const clientWidth = chipsListBoxRef.current?.clientWidth ?? 0;

    const maxScrollLeft = listBoxWidth - clientWidth;

    setIsStart(currentScrollPos <= 0);
    setIsEnd(currentScrollPos >= maxScrollLeft);
  };

  const throttledHandleScroll = useCallback(() => throttle(handleScroll, 200), []);

  return (
    <ChipsListWrapper>
      {!isStart && <LeftBlurBox />}
      {!isEnd && <RightBlurBox />}
      {!isStart && (
        <LeftButton onClick={scrollToLeft}>
          <IcPrevButton />
        </LeftButton>
      )}
      {!isEnd && (
        <RightButton onClick={scrollToRight}>
          <IcNextButton />
        </RightButton>
      )}
      <ChipsListBox ref={chipsListBoxRef} onScroll={throttledHandleScroll}>
        {chipsTextList.map((buttonText: string, idx: number) => (
          <Chip
            key={`chip-${idx}`}
            buttonText={buttonText}
            selectedOption={selectedOption}
            changeSelectedOption={() => setSelectedOption(buttonText)}
          />
        ))}
      </ChipsListBox>
    </ChipsListWrapper>
  );
}

export default ChipsList;

const ChipsListWrapper = styled.section`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  height: 4rem;
`;

const LeftButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 6rem;
  height: 100%;

  transform: translateY(5%);
`;

const RightButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  width: 6rem;
  height: 100%;

  transform: translateY(5%);
`;

const ChipsListBox = styled.article`
  display: flex;
  column-gap: 0.8rem;

  height: 100%;

  overflow-x: scroll;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const IcPrevButton = styled(IcNextButton)`
  rotate: 180deg;
`;

const LeftBlurBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 15rem;
  height: 100%;

  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 2.8%, rgb(255, 255, 255) 50.96%);
`;

const RightBlurBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 15rem;
  height: 100%;

  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 2.8%, rgb(255, 255, 255) 50.96%);
`;
