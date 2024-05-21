import { styled } from "styled-components";

import CommunitySidebar from "../../components/Community/CommunitySidebar";
import ProgramSection from "../../components/Community/ProgramSection";

function Community() {
  return (
    <CommunityWrapper>
      <CommunitySidebar />
      <ProgramSection />
    </CommunityWrapper>
  );
}

export default Community;

const CommunityWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;
