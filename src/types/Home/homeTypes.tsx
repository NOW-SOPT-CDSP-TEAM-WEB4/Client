import { ReactNode } from "react";

export interface CarouselImgContainerProps {
  offset: number;
  transition: boolean;
}

export interface Creative {
  name: string;
  creativeId: number;
  view: number;
  like: number;
}

export interface BestFolioHomeItemProps {
  imgSrc: string;
  name: string;
  companyLogo: ReactNode;
  viewLogo?: ReactNode;
  view: number;
  like: number;
  greyHeartLogo: ReactNode;
  isHearted: boolean;
  toggleHeart: () => void;
  creativeId: number;
}

export interface DesignerRecruitItemProps {
  imgSrc: string;
  title: string;
  companyLogo: ReactNode;
  company: string;
}
export interface NotefolioRecommendItemProps {
  imgSrc: string[];
  companyLogo: ReactNode;
  company: string;
  content?: string;
  key: number;
}
