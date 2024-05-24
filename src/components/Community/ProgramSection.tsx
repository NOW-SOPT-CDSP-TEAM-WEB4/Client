import { useEffect, useState } from "react";

import { styled } from "styled-components";

import { getProgram } from "../../apis/Community/getProgram";
import { ProgramItemProps } from "../../types/Community/communityProps";

import ProgramItem from "./ProgramItem";

function ProgramSection() {
  const [programList1, setProgramList1] = useState<ProgramItemProps[]>([]);

  const [programList2, setProgramList2] = useState<ProgramItemProps[]>([]);

  useEffect(() => {
    const getProgramList = async () => {
      try {
        const apiGet = await getProgram();
        const newList1 = [];
        const newList2 = [];
        for (let i = 0; i < 4; i++) {
          const apiItem = apiGet.find((api: ProgramItemProps) => api.id === i + 1);
          {
            i < 2 ? newList1.push(apiItem) : newList2.push(apiItem);
          }
        }
        setProgramList1(newList1);
        setProgramList2(newList2);
      } catch (error) {
        console.log(error);
      }
    };

    getProgramList();
  }, []);

  return (
    <ProgramSectionWrapper>
      <ProgramOutContainer>
        <Title>새롭게 오픈한 프로그램 💡</Title>
        <ProgramContainer>
          {programList1.map((item) => (
            <ProgramItem key={item.title} {...item} />
          ))}
        </ProgramContainer>
      </ProgramOutContainer>
      <ProgramOutContainer>
        <Title>프로덕트 디자이너로 성장하기</Title>
        <ProgramContainer>
          {programList2.map((item) => (
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

  margin-bottom: 2.4rem;

  ${({ theme }) => theme.fonts.Bold24_32}
`;

const ProgramContainer = styled.section`
  display: flex;
  flex-direction: row;

  gap: 2.4rem;
`;
