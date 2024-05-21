import styled from "styled-components";

import { ProgramItemProps } from "../../types/Community/communityProps";

function ProgramItem({ title, content, date, online, src }: ProgramItemProps) {
  return (
    <ProgramItemWrapper>
      <ProgramItemContainer key={title}>
        <ProgramImg src={src} />
        <Online online={online}>{online ? "실시간 온라인" : "오프라인"}</Online>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Date>{date}</Date>
      </ProgramItemContainer>
    </ProgramItemWrapper>
  );
}

export default ProgramItem;

const ProgramItemWrapper = styled.section`
  display: flex;
`;

const ProgramItemContainer = styled.button`
  display: flex;
  flex-direction: column;
`;

const ProgramImg = styled.img`
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
`;

const Title = styled.div`
  display: flex;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.b03};

  ${({ theme }) => theme.fonts.Bold16_24};
`;

const Content = styled.article`
  display: flex;

  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.b05};

  ${({ theme }) => theme.fonts.Regular15_24};
`;

const Date = styled.article`
  display: flex;

  color: ${({ theme }) => theme.colors.b09};

  ${({ theme }) => theme.fonts.Medium14_22};
`;
