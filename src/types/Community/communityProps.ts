export interface ProgramItemProps {
  id: number;
  title: string;
  content: string;
  date: string;
  online: boolean;
}

export interface WorkshopItemProps {
  workshopId: number;
  title: string;
  content: string;
  date: string;
  online: boolean;
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
