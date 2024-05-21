import { styled } from "styled-components";

import ProgramItem from "./ProgramItem";

// api 연결할 때 여기서 워크샵 목록 ProgramItem으로 props 전달해주기

function ProgramSection() {
  const communityProgram = [
    {
      title: "제목1",
      content: "내용이 들어갑니다~",
      date: "2022/01/30 (5시)",
      online: true,
      src: "/src/assets/img/img_program_1.png",
    },
    {
      title: "제목2",
      content: "내용이 들어갑니다~",
      date: "2022/01/30 (5시)",
      online: true,
      src: "/src/assets/img/img_program_2.png",
    },
  ];

  return (
    <ProgramSectionWrapper>
      <ProgramOutContainer>
        <Title>새롭게 오픈한 프로그램 💡</Title>
        <ProgramContainer>
          {communityProgram.map((item) => (
            <ProgramItem key={item.title} {...item} />
          ))}
        </ProgramContainer>
      </ProgramOutContainer>
      <ProgramOutContainer>
        <Title>프로덕트 디자이너로 성장하기</Title>
        <ProgramContainer>
          {communityProgram.map((item) => (
            <ProgramItem key={item.title} {...item} />
          ))}
        </ProgramContainer>
      </ProgramOutContainer>
    </ProgramSectionWrapper>
  );
}

export default ProgramSection;

const ProgramSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  padding-top: 2.4rem;

  gap: 12rem;
`;

const ProgramOutContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.Bold24_32}
`;

const ProgramContainer = styled.section`
  display: flex;
  flex-direction: row;
`;
