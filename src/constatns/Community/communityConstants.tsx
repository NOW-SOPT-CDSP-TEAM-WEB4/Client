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

const communityArticle = [
  {
    label: "👀 커뮤니티 인기 게시글",
    title: "UIUX 신입 디자이너 희망하고 있습니다. 이력서 넣",
    content:
      "경력은 있지만 전혀 다른 경력이라 디자인은 무경력입니다.. 전 경력들도 알바나, 소개로 일한 곳이라 제가 공고를 보고 지원하",
    updateDate: "• 5일 전",
  },
  {
    label: "😎 에디터 추천 게시글",
    title: "오랜만에 몇가지, 인사이트와 현재진행형 경험이 담",
    content: "올해에는 좋은일과, 그만큼의 나쁜일도 함께 손잡고 찾아오는 한 해인 것 같아요..ㅎㅎ…",
    updateDate: "• 5일 전",
  },
];

export { navCategory, outLinkCategory, commuityCategory, communityArticle };
