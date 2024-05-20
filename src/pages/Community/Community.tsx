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
  display: flex;
  flex-direction: column;

  width: 100%;
`;
