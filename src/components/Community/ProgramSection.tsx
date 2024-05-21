import React from "react";

import styled from "styled-components";

function ProgramSection() {
  return (
    <ProgramSectionWrapper>
      <ProgramContainer>
        <Title>새롭게 오픈한 프로그램 💡</Title>
      </ProgramContainer>
    </ProgramSectionWrapper>
  );
}

export default ProgramSection;

const ProgramSectionWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  align-self: stretch;

  padding-top: 2.4rem;

  /* 폰트 왜 안 먹히는지 확인 */
  ${({ theme }) => theme.fonts.Bold24_32}
`;

const ProgramContainer = styled.section`
  display: flex;
`;

const Title = styled.div`
  display: flex;
`;
