import React, { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

import { IcArrowDown, IcFilter, IcSearch } from "../../assets";
import { debounce } from "../../utils/debounce";

function SearchInputSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    setSearchWord(searchParams.get("keyword") || "");
  }, [searchParams]);

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchWord.length !== 0 && setSearchParams({ keyword: searchWord });
    }
  };

  const debouncedHandleChangeSearchInput = useCallback(debounce(handleChangeSearchInput, 300), []);

  return (
    <SearchInputSectionWrapper>
      <SearchInputWrapper>
        <StyledIcSearch />
        <SearchInput
          placeholder="190,000개 이상의 크리에이티브 검색"
          onChange={debouncedHandleChangeSearchInput}
          onKeyDown={(e) => handleKeyDownEnter(e)}
        />
        <GreyBar />
        <SelectBox>
          <SelectedOption>크리에이티브</SelectedOption>
          <IcArrowDown />
        </SelectBox>
      </SearchInputWrapper>
      <FilterButton>
        <IcFilter />
        <FilterButtonText>필터 및 정렬</FilterButtonText>
      </FilterButton>
    </SearchInputSectionWrapper>
  );
}

export default SearchInputSection;

const SearchInputSectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: sticky;
  top: 5.6rem;
  z-index: 2;

  width: 100%;
  padding: 1.6rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.chips_hover};
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;

  width: calc(100% - 15.1rem);
  height: 4.8rem;
  padding: 0 2.4rem;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.g03}`};
  border-radius: 7rem;

  background-color: ${({ theme }) => theme.colors.w01};
`;

const SearchInput = styled.input`
  width: calc(100% - 21.3rem);
  height: 100%;
  margin-left: 1.4rem;
  border: none;

  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Bold14_22};

  &:focus {
    outline: none;
  }
`;

const StyledIcSearch = styled(IcSearch)`
  width: 2rem;
  height: 2rem;
`;

const GreyBar = styled.div`
  width: 0.5rem;
  height: 2rem;
  margin: 0 3.2rem;

  background-color: ${({ theme }) => theme.colors.g04};
`;
const SelectBox = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
`;

const SelectedOption = styled.p`
  margin-right: 3.1rem;

  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_22};
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;

  width: 12.9rem;
  height: 4.8rem;
  padding: 0;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.g03}`};
  border-radius: 2.8rem;

  background-color: ${({ theme }) => theme.colors.w01};
`;

const FilterButtonText = styled.p`
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_22};
`;
