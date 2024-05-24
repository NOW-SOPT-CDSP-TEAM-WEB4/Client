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
  isLike: boolean;
}

export interface BestFolioHomeItemProps {
  name: string;
  view: number;
  like: number;
  isLike: boolean;
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
