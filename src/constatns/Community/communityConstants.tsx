import { ImgHouse, ImgWorkshop, ImgProject, ImgCommuity, ImgContents, ImgDesign, ImgOpen } from "../../assets";

const navCategory = [
  { content: "홈", element: <ImgHouse />, dropdown: false },
  { content: "워크숍&세미나", element: <ImgWorkshop />, dropdown: false },
  { content: "프로젝트&챌린지", element: <ImgProject />, dropdown: false },
  { content: "커뮤니티", element: <ImgCommuity />, dropdown: true },
  { content: "콘텐츠", element: <ImgContents />, dropdown: false },
];

const outLinkCategory = [
  { content: "디자이너 생존 테스트", element: <ImgDesign /> },
  { content: "디자이너 오픈 채팅방", element: <ImgOpen /> },
];

const commuityCategory = [
  "전체",
  "자유주제",
  "포트폴리오",
  "취업/이직/커리어",
  "사이드 프로젝트/스터디",
  "내 생존 유형은?",
];

export { navCategory, outLinkCategory, commuityCategory };
