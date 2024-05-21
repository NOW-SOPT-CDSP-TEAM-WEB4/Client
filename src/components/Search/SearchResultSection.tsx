import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

import SearchResultItem from "./SearchResultItem";

const mockData = [
  {
    id: 0,
    isHeart: true,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 1,
    isHeart: true,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 2,
    isHeart: true,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 3,
    isHeart: true,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 4,
    isHeart: true,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 5,
    isHeart: false,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
  {
    id: 6,
    isHeart: false,
    name: "amteum-암튼",
    view: 153,
    heart: 0,
  },
];

function SearchResultSection() {
  const [searchParams] = useSearchParams();
  return (
    <SearchResultSectionWrapper>
      <SearchText>{`'${searchParams.get("keyword")}' 에 대한 검색 결과`}</SearchText>
      <CountText>0개의 크리에이티브를 발견했습니다.</CountText>
      <SearchResultItemContainer>
        {mockData.map((item) => (
          <SearchResultItem key={item.id} {...item} />
        ))}
      </SearchResultItemContainer>
    </SearchResultSectionWrapper>
  );
}

export default SearchResultSection;

const SearchResultSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchText = styled.h1`
  margin-top: 5.6rem;

  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.05rem;

  ${({ theme }) => theme.fonts.Bold40_56};
`;

const CountText = styled.p`
  margin-top: 1.2rem;

  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.05rem;

  ${({ theme }) => theme.fonts.Regular18_26};
`;

const SearchResultItemContainer = styled.article`
  display: grid;
  margin: 6.4rem 0 20rem 0;
  gap: 4.8rem 2.4rem;
  grid-template-columns: repeat(4, 1fr);
`;
