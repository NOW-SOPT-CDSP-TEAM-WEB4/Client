export interface ProgramItemProps {
  programId: number;
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
  src: string;
}
