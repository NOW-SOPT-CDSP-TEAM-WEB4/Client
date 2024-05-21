import { styled } from "styled-components";

function DesignerRecruitSection() {
  return <DesignerRecruitSectionWrapper></DesignerRecruitSectionWrapper>;
}

export default DesignerRecruitSection;

const DesignerRecruitSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 3.5rem 5.9rem 4.2rem 6rem;
  gap: 2.6rem;
  background-color: ${({ theme }) => theme.colors.b03};
`;
