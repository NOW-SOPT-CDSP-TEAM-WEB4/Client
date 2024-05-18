import { styled } from "styled-components";

function BestFolio() {
  return (
    <BestFolioContainer>
      <ChipContainer>
        <ChipContainerTitle />
      </ChipContainer>
    </BestFolioContainer>
  );
}

export default BestFolio;

const BestFolioContainer = styled.section`
  display: flex;
`;

const ChipContainer = styled.section`
  display: flex;
`;

const ChipContainerTitle = styled.p`
  font-size: large;
`;
