import { styled } from "styled-components";

import { DesignerRecruitItemProps } from "../../types/Home/homeTypes";

function DesignerRecruitItem({ imgSrc, title, companyLogo, company }: DesignerRecruitItemProps) {
  return (
    <DesignerRecruitItemWrapper>
      <ImgDesignRecruit src={import.meta.env.VITE_DOMAIN + imgSrc} />
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
  margin-bottom: 4.2rem;
`;

const ImgDesignRecruit = styled.img`
  width: 100%;
  height: 17.5rem;

  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.2rem;
  margin-top: 1.1rem;
`;

const RecruitLetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.2rem;
  margin-left: 1.6rem;
`;

const RecruitTitle = styled.p`
  color: ${({ theme }) => theme.colors.w01};
  ${({ theme }) => theme.fonts.SemiBold14_17};
`;

const RecruitCompany = styled.p`
  color: ${({ theme }) => theme.colors.g04};
  ${({ theme }) => theme.fonts.Medium13_20};
  letter-spacing: -0.025rem;
`;
