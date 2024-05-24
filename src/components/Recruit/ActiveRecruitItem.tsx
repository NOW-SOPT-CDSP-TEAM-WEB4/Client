import { styled } from "styled-components";

import { IcClock } from "../../assets";
import { ActiveRecruitItemProps } from "../../types/Recruit/recruitTypes";

function ActiveRecruitItem({
  imgSrc,
  position,
  title,
  place,
  info,
  companyLogo,
  company,
  endTime,
}: ActiveRecruitItemProps) {
  return (
    <ActiveRecruitItemWrapper>
      <ImgActiveRecruit src={import.meta.env.VITE_DOMAIN + imgSrc} />
      <RecruitInfoContainer>
        <RecruitPosition>{position}</RecruitPosition>
        <RecruitTitle>{title}</RecruitTitle>
        <RecruitPlace>{place}</RecruitPlace>
        <RecruitInfo>{info}</RecruitInfo>
        <RecruitCompanyContainer>
          {companyLogo}
          <RecruitCompany>{company}</RecruitCompany>
        </RecruitCompanyContainer>
        <EndTimeContainer>
          <IcClock />
          <EndTime>{endTime}</EndTime>
        </EndTimeContainer>
      </RecruitInfoContainer>
    </ActiveRecruitItemWrapper>
  );
}

export default ActiveRecruitItem;

const ActiveRecruitItemWrapper = styled.div`
  width: 30.15rem;
`;

const ImgActiveRecruit = styled.img`
  width: 100%;
  height: 24rem;

  object-fit: cover;
`;

const RecruitInfoContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const RecruitPosition = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Regular13_20};
`;

const RecruitTitle = styled.h2`
  color: ${({ theme }) => theme.colors.b03};
  letter-spacing: -0.05rem;

  ${({ theme }) => theme.fonts.Bold16_24};
`;

const RecruitPlace = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Regular13_20};
`;

const RecruitInfo = styled.p`
  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.Medium14_22};
`;

const RecruitCompanyContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  height: 2.8rem;
  margin-top: 1rem;
`;

const RecruitCompany = styled.h3`
  color: ${({ theme }) => theme.colors.b05};
  letter-spacing: -0.025rem;

  ${({ theme }) => theme.fonts.SemiBold13_20};
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
