import { styled } from "styled-components";

import { popularImgList } from "../../constants/Community/communityConstants";
import { WorkshopItemProps } from "../../types/Community/communityProps";

function PopularItem({ workshopId, title, content, date, online }: WorkshopItemProps) {
  return (
    <PopularItemWrapper>
      <PopularItemContainer>
        <PopularImg src={popularImgList[workshopId - 1]} />
        <Online online={online}>{online ? "실시간 온라인" : "오프라인"}</Online>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Date>{date}</Date>
      </PopularItemContainer>
    </PopularItemWrapper>
  );
}

export default PopularItem;

const PopularItemWrapper = styled.section`
  display: flex;
`;

const PopularItemContainer = styled.button`
  display: flex;
  flex-direction: column;

  padding: 0;
`;

const PopularImg = styled.img`
  display: flex;
  align-self: stretch;

  margin-bottom: 1.6rem;

  border-radius: 0.8rem;
`;

const Online = styled.div<{ online: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 0.6rem;
  padding: 0.4rem 0.8rem;

  border-radius: 0.4rem;

  color: ${({ theme }) => theme.colors.w01};

  background-color: ${({ theme, online }) => (online ? theme.colors.bb03 : theme.colors.gg01)};

  ${({ theme }) => theme.fonts.Bold12_16};
  letter-spacing: -0.025rem;
`;

const Title = styled.div`
  display: flex;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.b03};
  ${({ theme }) => theme.fonts.Bold16_24};
  letter-spacing: -0.05rem;
`;

const Content = styled.article`
  display: flex;

  margin-bottom: 1.8rem;

  color: ${({ theme }) => theme.colors.b05};
  ${({ theme }) => theme.fonts.Regular15_Auto};
  letter-spacing: -0.025rem;
`;

const Date = styled.article`
  display: flex;

  color: ${({ theme }) => theme.colors.b09};
  ${({ theme }) => theme.fonts.Regular14_22};
  letter-spacing: -0.025rem;
`;
