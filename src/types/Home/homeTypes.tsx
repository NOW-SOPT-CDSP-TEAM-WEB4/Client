import { ReactNode } from "react";

export interface CarouselImgContainerProps {
  offset: number;
  transition: boolean;
}

export interface BestFolioHomeItemProps {
  imgSrc: string;
  name: string;
  companyLogo: ReactNode;
  viewLogo: ReactNode;
  view: number;
  like: number;
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
  imgSrc: string[];
  companyLogo: ReactNode;
  company: string;
  content?: string;
  key: number;
}
