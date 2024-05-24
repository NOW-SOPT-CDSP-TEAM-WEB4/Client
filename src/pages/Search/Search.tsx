import { styled } from "styled-components";

import SearchInputSection from "../../components/Search/SearchInputSection";
import SearchResultSection from "../../components/Search/SearchResultSection";

function Search() {
  return (
    <SearchWrapper>
      <SearchInputSection />
      <SearchResultSection />
    </SearchWrapper>
  );
}

export default Search;

const SearchWrapper = styled.div`
  width: 100%;
`;
