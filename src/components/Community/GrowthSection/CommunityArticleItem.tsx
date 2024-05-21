import { styled } from "styled-components";

import { communityArticle } from "../../../constatns/Community/communityConstants";

function CommunityArticleItem() {
  return (
    <CommunityArticleItemWrapper>
      {communityArticle.map((item) => (
        <CommunityArticleItemContainer key={item.label} type="button">
          <LabelBox backgroundColor={item.labelColor}>{item.label}</LabelBox>
          <Title>{item.title}</Title>
          <Content>{item.content}</Content>
          <UpdateDate>{item.updateDate}</UpdateDate>
        </CommunityArticleItemContainer>
      ))}
    </CommunityArticleItemWrapper>
  );
}

export default CommunityArticleItem;

const CommunityArticleItemWrapper = styled.section`
  display: flex;
  flex-direction: row;

  margin-bottom: 2.4rem;

  gap: 2.4rem;
`;
const CommunityArticleItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  padding: 3.7rem 2.5rem;

  /* width, height 100%로 맞추기?... 나중에 확인 */
  /* height: 22.6rem; */
  width: 41.1rem;

  border: 0.1rem solid;
  border-radius: 0.8rem;
  border-color: ${({ theme }) => theme.colors.g03};
`;

const LabelBox = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.75rem;
  padding: 0.4rem 0.8rem;

  ${({ theme }) => theme.fonts.Bold12_16};

  color: ${({ theme }) => theme.colors.w01};

  border-radius: 0.4rem;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "blue" ? theme.colors.bb05 : theme.colors.gg02};
`;

const Title = styled.div`
  display: flex;

  margin-bottom: 0.65rem;

  color: ${({ theme }) => theme.colors.b03};

  ${({ theme }) => theme.fonts.Bold18_26};
`;

const Content = styled.article`
  text-align: left;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.b05};

  ${({ theme }) => theme.fonts.Regular15_24};
`;

const UpdateDate = styled.div`
  color: ${({ theme }) => theme.colors.b07};

  ${({ theme }) => theme.fonts.Regular13_Auto};
`;
