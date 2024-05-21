import styled from "styled-components";

import { ProgramItemProps } from "../../types/Community/communityProps";

function ProgramItem({ title, content, date, online, src }: ProgramItemProps) {
  return (
    <ProgramItemWrapper>
      <ProgramItemContainer key={title}>
        <ProgramImg src={src} />
        {content}
        {date}
        {online}
      </ProgramItemContainer>
    </ProgramItemWrapper>
  );
}

export default ProgramItem;

const ProgramItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const ProgramItemContainer = styled.button`
  display: flex;
`;

const ProgramImg = styled.img`
  display: flex;
  align-self: stretch;
`;

// const Online = styled.div`
//   display: flex;
// `;
