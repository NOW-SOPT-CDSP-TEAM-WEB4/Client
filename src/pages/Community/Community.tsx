import { styled } from "styled-components";

import CommunitySidebar from "../../components/Community/CommunitySidebar";

function Community() {
  return (
    <CommunityWrapper>
      <CommunitySidebar />
    </CommunityWrapper>
  );
}

export default Community;

const CommunityWrapper = styled.div`
  width: 100%;
`;
