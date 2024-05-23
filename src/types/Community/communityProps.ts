export interface ProgramItemProps {
  id: number;
  title: string;
  content: string;
  date: string;
  online: boolean;
  src: string;
}

export interface PopularItemProps {
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
