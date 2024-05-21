import { styled } from "styled-components";

import { useGetCreativeSearch } from "../../hooks/Search/useGetCreativeSearch";

import SearchResultItem from "./SearchResultItem";

function SearchResultSection() {
  const { dataList, keyword } = useGetCreativeSearch();
  return (
    <SearchResultSectionWrapper>
      <SearchText>{`'${keyword}' 에 대한 검색 결과`}</SearchText>
      <CountText>{dataList.length}개의 크리에이티브를 발견했습니다.</CountText>
      <SearchResultItemContainer>
        {dataList?.map((item) => <SearchResultItem key={item.creativeId} {...item} />)}
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
