import { styled } from "styled-components";

import { IcCheckWhite } from "../../assets";
import { ChipWrapperProps } from "../../types/common/chipsListType";

function Chip({ buttonText, selectedOption, changeSelectedOption }: ChipWrapperProps) {
  return (
    <ChipWrapper isSelected={buttonText === selectedOption} onClick={changeSelectedOption}>
      {buttonText === selectedOption && <IcCheckWhite />}
      {buttonText}
    </ChipWrapper>
  );
}

export default Chip;

const ChipWrapper = styled.button<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  flex: 0 0 auto;

  height: 100%;
  padding: 0.8rem 1.6rem;

  border-radius: 7.2rem;
  border: ${({ theme, isSelected }) => !isSelected && `0.1rem solid ${theme.colors.g03}`};

  background-color: ${({ theme, isSelected }) => isSelected && theme.colors.bb03};

  color: ${({ theme, isSelected }) => isSelected && theme.colors.w01};

  ${({ theme }) => theme.fonts.SemiBold14_22};

  &:hover {
    background-color: ${({ theme, isSelected }) => !isSelected && theme.colors.chips_hover};
  }
`;
