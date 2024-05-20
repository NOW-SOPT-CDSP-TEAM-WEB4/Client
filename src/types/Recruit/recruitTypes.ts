import { ReactNode } from "react";

export interface ActiveRecruitItemProps {
  imgSrc: string;
  position: string;
  title: string;
  place: string;
  info: string;
  companyLogo: ReactNode;
  company: string;
  endTime: string;
}
