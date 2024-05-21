import { styled } from "styled-components";

import GrowthSection from "../../components/Community/GrowthSection/GrowthSection";
import CommunitySidebar from "../../components/Community/Sidebar/CommunitySidebar";

function Community() {
  return (
    <CommunityWrapper>
      <CommunitySidebar />
      <CommunityMain>
        <GrowthSection />
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
  flex-direction: column;
  align-items: center;
  align-self: stretch;

  padding: 4.8rem 13.9rem 12rem 13.9rem;
  width: 112.4rem;
  min-height: 72rem;

  gap: 12rem;
`;
