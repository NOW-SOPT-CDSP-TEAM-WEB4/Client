import { styled } from "styled-components";

import BannerContainer from "../../components/Recruit/BannerContainer/BannerContainer";

function Recruit() {
  return (
    <RecruitWrapper>
      <BannerContainer />
    </RecruitWrapper>
  );
}

export default Recruit;

const RecruitWrapper = styled.div`
  width: 100%;
`;
