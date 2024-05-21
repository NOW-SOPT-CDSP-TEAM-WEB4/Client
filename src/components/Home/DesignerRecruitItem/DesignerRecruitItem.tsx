import { styled } from "styled-components";

import { DesignerRecruitItemProps } from "../../../types/Home/homeTypes";

function DesignerRecruitItem({ imgSrc, title, companyLogo, company }: DesignerRecruitItemProps) {
  return (
    <DesignerRecruitItemWrapper>
      <ImgDesignRecruit src={imgSrc} />
      <InfoContainer>
        {companyLogo}
        <RecruitLetterContainer>
          <RecruitTitle>{title}</RecruitTitle>
          <RecruitCompany>{company}</RecruitCompany>
        </RecruitLetterContainer>
      </InfoContainer>
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

const InfoContainer = styled.div`
  width: 100%;
`;

const RecruitLetterContainer = styled.div`
  display: flex;
`;

const RecruitTitle = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.SemiBold14_17};
`;

const RecruitCompany = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.SemiBold14_17};
`;
