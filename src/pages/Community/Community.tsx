import { styled } from "styled-components";

import CommunitySidebar from "../../components/Community/CommunitySidebar";
import GrowthSection from "../../components/Community/GrowthSection";
import PopularSection from "../../components/Community/PopularSection";
import ProgramSection from "../../components/Community/ProgramSection";

function Community() {
  return (
    <CommunityWrapper>
      <CommunitySidebar />
      <CommunityMain>
        <GrowthSection />
        <ProgramSection />
        <PopularSection />
      </CommunityMain>
    </CommunityWrapper>
  );
}

export default Community;

const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const CommunityMain = styled.section`
  display: flex;
  width: 112.4rem;
  padding: 4.8rem 13.9rem 12rem 13.9rem;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  min-height: 72rem;

  gap: 12rem;
`;
