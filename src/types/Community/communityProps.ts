export interface ProgramItemProps {
  programId: number;
  title: string;
  content: string;
  date: string;
  online: boolean;
  src: string;
}

export interface WorkshopItemProps {
  title: string;
  content: string;
  date: string;
  online: boolean;
  src: string;
}

export interface CarouselProps {
  itemId: number;
  title: string;
  content: string;
  src: string;
}

export interface CarouselTemProps {
  itemId: number;
  src: string;
}
