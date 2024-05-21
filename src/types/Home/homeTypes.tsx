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
