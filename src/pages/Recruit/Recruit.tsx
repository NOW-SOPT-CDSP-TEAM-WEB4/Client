import { styled } from "styled-components";

import ActiveRecruitSection from "../../components/Recruit/ActiveRecruitSection";
import BannerSection from "../../components/Recruit/BannerSection";
import DesignerRecruitSection from "../../components/Recruit/DesignerRecruitSection";

function Recruit() {
  return (
    <RecruitWrapper>
      <BannerSection />
      <RecruitBodyWrapper>
        <ActiveRecruitSection />
        <DesignerRecruitSection />
      </RecruitBodyWrapper>
    </RecruitWrapper>
  );
}

export default Recruit;

const RecruitWrapper = styled.div`
  width: 100%;
`;

const RecruitBodyWrapper = styled.main`
  padding: 0 calc((100vw - 130.2rem) / 2);
`;
