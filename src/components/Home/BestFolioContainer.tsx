import { styled } from "styled-components";

function BestFolioContainer() {
  return (
    <BestFolioContainerWrapper>
      <ChipContainer>
        <ChipContainerTitle />
      </ChipContainer>
    </BestFolioContainerWrapper>
  );
}

export default BestFolioContainer;

const BestFolioContainerWrapper = styled.section`
  display: flex;
`;

const ChipContainer = styled.section`
  display: flex;
`;

const ChipContainerTitle = styled.p`
  font-size: large;
`;
