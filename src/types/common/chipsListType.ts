export interface ChipsListProps {
  chipsTextList: string[];
}

export interface ChipWrapperProps {
  buttonText: string;
  selectedOption: string;
  changeSelectedOption: () => void;
}
