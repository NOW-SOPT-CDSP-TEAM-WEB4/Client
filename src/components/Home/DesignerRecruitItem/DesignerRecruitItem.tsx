import { styled } from "styled-components";

function DesignerRecruitItem() {
  return (
    <DesignerRecruitItemWrapper>
      <ImgDesignRecruit />
    </DesignerRecruitItemWrapper>
  );
}

export default DesignerRecruitItem;
const DesignerRecruitItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 23.2rem;
`;

const ImgDesignRecruit = styled.img`
  width: 100%;
  height: 17.5rem;

  object-fit: cover;
`;
