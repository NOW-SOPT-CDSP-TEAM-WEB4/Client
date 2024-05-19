import { styled } from "styled-components";

import SearchInputSection from "../../components/Search/SearchInputSection";

function Search() {
  return (
    <SearchWrapper>
      <SearchInputSection />
    </SearchWrapper>
  );
}

export default Search;

const SearchWrapper = styled.div`
  width: 100%;
`;
