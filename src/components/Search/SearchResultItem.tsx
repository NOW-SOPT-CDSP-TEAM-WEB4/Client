import { styled } from "styled-components";

import { IcHeart, IcLogoAuthor1, IcView } from "../../assets";
import { SearchResultItemProps } from "../../types/Search/searchTypes";

function SearchResultItem({ name, view, heart }: SearchResultItemProps) {
  return (
    <SearchResultItemWrapper>
      <SearchResultItemImg src="/src/assets/img/img_search_result_1.png" />
      <SearchResultInfo>
        <AuthorInfo>
          <IcLogoAuthor1 />
          <AuthorName>{name}</AuthorName>
        </AuthorInfo>
        <DataInfo>
          <ViewInfo>
            <IcView />
            <ViewCount>{view}</ViewCount>
          </ViewInfo>
          <HeartInfo>
            <IcHeart />
            <HeartCount>{heart}</HeartCount>
          </HeartInfo>
        </DataInfo>
      </SearchResultInfo>
    </SearchResultItemWrapper>
  );
}

export default SearchResultItem;

const SearchResultItemWrapper = styled.div`
  width: 29.15rem;
`;

const SearchResultItemImg = styled.img`
  width: 100%;
  height: 29.15rem;

  object-fit: cover;
`;

const SearchResultInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 1.2rem;

  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;

const AuthorName = styled.p`
  color: ${({ theme }) => theme.colors.b03};

  ${({ theme }) => theme.fonts.SemiBold14_17};
`;

const DataInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.3rem;
`;

const ViewInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
`;

const ViewCount = styled.p`
  color: ${({ theme }) => theme.colors.b07};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_20};
`;

const HeartInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.2rem;
`;

const HeartCount = styled.p`
  color: ${({ theme }) => theme.colors.b07};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_20};
`;
