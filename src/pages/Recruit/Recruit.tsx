import { styled } from "styled-components";

import ActiveRecruitSection from "../../components/Recruit/ActiveRecruitSection/ActiveRecruitSection";
import BannerContainer from "../../components/Recruit/BannerContainer/BannerContainer";

function Recruit() {
  return (
    <RecruitWrapper>
      <BannerContainer />
      <RecruitBodyWrapper>
        <ActiveRecruitSection />
      </RecruitBodyWrapper>
    </RecruitWrapper>
  );
}

export default Recruit;

const RecruitWrapper = styled.div`
  width: 100%;
`;

const RecruitBodyWrapper = styled.main`
  padding: 0 3.2rem;
`;
