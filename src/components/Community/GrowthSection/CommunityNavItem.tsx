import styled from "styled-components";

import { IcArrowrightRg } from "../../../assets";
import { communityNav } from "../../../constatns/Community/communityConstants";

function CommunityNavItem() {
  return (
    <CommunityNavItemWrapper>
      {communityNav.map((item) => (
        <CommunityNavContainer key={item.label} type="button" backgroundColor={item.backgroundColor}>
          <LabelBox>
            {item.label}
            <IcArrowrightRgIcon />
          </LabelBox>
          <ContentContainer>
            <Content>{item.content1}</Content>
            <Content>{item.content2}</Content>
          </ContentContainer>
          <ImgContainer>{item.element}</ImgContainer>
        </CommunityNavContainer>
      ))}
    </CommunityNavItemWrapper>
  );
}

export default CommunityNavItem;

const CommunityNavItemWrapper = styled.section`
  display: flex;

  gap: 2.716rem;
`;

const CommunityNavContainer = styled.button<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;

  width: 19.1rem;
  height: 20rem;

  border-radius: 0.8rem;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "yellow"
      ? theme.colors.o01
      : backgroundColor === "orange"
        ? theme.colors.o03
        : backgroundColor === "skyBlue"
          ? theme.colors.bb01
          : theme.colors.bb02};
`;

const LabelBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.719rem 0 1.3rem 1.574rem;
  padding: 0.6rem 0.6rem 0.6rem 1.2rem;
  /* width: 8.7659rem; */
  height: 2.6232rem;

  border-radius: 3.5389rem;

  ${({ theme }) => theme.fonts.SemiBold14_22};

  background-color: ${({ theme }) => theme.colors.w01};
`;

const IcArrowrightRgIcon = styled(IcArrowrightRg)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.35rem 0.5rem;
  width: 1.2rem;
  height: 1.2rem;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 2.473rem;
`;

const Content = styled.article`
  display: flex;
  text-align: left;

  color: ${({ theme }) => theme.colors.b04};

  ${({ theme }) => theme.fonts.Medium14_22};
`;

const ImgContainer = styled.div`
  display: flex;
`;
