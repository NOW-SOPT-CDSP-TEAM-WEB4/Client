import { styled } from "styled-components";

import { IcClock } from "../../assets";
import { DesignerRecruitItemProps } from "../../types/Recruit/recruitTypes";

function DesignerRecruitItem({
  imgSrc,
  position,
  title,
  place,
  endTime,
  companyLogo,
  company,
}: DesignerRecruitItemProps) {
  return (
    <DesignerRecruitItemWrapper>
      <ImgDesignerRecruit src={imgSrc} />
      <DesignerRecruitInfoContainer>
        <DesignerRecruitPosition>{position}</DesignerRecruitPosition>
        <DesignerRecruitTitle>{title}</DesignerRecruitTitle>
        <DesignerRecruitPlace>{place}</DesignerRecruitPlace>
        <EndTimeContainer>
          <IcClock />
          <EndTime>{endTime}</EndTime>
        </EndTimeContainer>
        <DesignerRecruitCompanyContainer>
          {companyLogo}
          <DesignerRecruitCompany>{company}</DesignerRecruitCompany>
        </DesignerRecruitCompanyContainer>
      </DesignerRecruitInfoContainer>
    </DesignerRecruitItemWrapper>
  );
}

export default DesignerRecruitItem;

const DesignerRecruitItemWrapper = styled.div`
  width: 19.7rem;
`;

const ImgDesignerRecruit = styled.img`
  width: 100%;
  height: 14.77rem;

  object-fit: cover;
`;

const DesignerRecruitInfoContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const DesignerRecruitPosition = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Regular13_20};
`;

const DesignerRecruitTitle = styled.h2`
  color: ${({ theme }) => theme.colors.b03};
  letter-spacing: -0.05rem;

  ${({ theme }) => theme.fonts.SemiBold16_24};
`;

const DesignerRecruitPlace = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Regular13_20};
`;

const EndTimeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;

  margin-top: 1rem;
`;

const EndTime = styled.p`
  color: ${({ theme }) => theme.colors.b10};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Regular13_20};
`;

const DesignerRecruitCompanyContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  height: 2.8rem;
  margin-top: 1rem;
`;

const DesignerRecruitCompany = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_20};
`;
