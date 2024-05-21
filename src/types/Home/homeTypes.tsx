import { ReactNode } from "react";

export interface CarouselImgContainerProps {
  offset: number;
  transition: boolean;
}

export interface BestFolioHomeItemProps {
  imgSrc: string;
  company: string;
  companyLogo: ReactNode;
  viewLogo: ReactNode;
  viewNum: number;
  heartNum: number;
  greyHeartLogo: ReactNode;
  isHearted: boolean;
  toggleHeart: () => void;
}

export interface DesignerRecruitItemProps {
  imgSrc: string;
  title: string;
  companyLogo: ReactNode;
  company: string;
}
export interface NotefolioRecommendItemProps {
  imgSrc: string;
  companyLogo: ReactNode;
  company: string;
  content: string;
}
