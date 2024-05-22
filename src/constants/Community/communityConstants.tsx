import {
  ImgHouse,
  ImgWorkshop,
  ImgProject,
  ImgCommuity,
  ImgContents,
  ImgDesign,
  ImgOpen,
  ImgFree,
  ImgWorkIm,
  ImgPort,
  ImgSide,
} from "../../assets";

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
    labelColor: "blue",
    title: "UIUX 신입 디자이너 희망하고 있습니다. 이력서 넣",
    content:
      "경력은 있지만 전혀 다른 경력이라 디자인은 무경력입니다.. 전 경력들도 알바나, 소개로 일한 곳이라 제가 공고를 보고 지원하",
    updateDate: "• 5일 전",
  },
  {
    label: "😎 에디터 추천 게시글",
    labelColor: "green",
    title: "오랜만에 몇가지, 인사이트와 현재진행형 경험이 담",
    content: "올해에는 좋은일과, 그만큼의 나쁜일도 함께 손잡고 찾아오는 한 해인 것 같아요..ㅎㅎ…",
    updateDate: "• 5일 전",
  },
];

const communityNav = [
  {
    label: "자유주제",
    content1: "창작자들의",
    content2: " 자유로운 이야기",
    backgroundColor: "yellow",
    element: <ImgFree />,
  },
  {
    label: "취업/이직",
    content1: "회사생활 관련",
    content2: " 도움이 필요해요",
    backgroundColor: "orange",
    element: <ImgWorkIm />,
  },
  {
    label: "포트폴리오",
    content1: "포트폴리오 고민",
    content2: "함께 나눠요",
    backgroundColor: "skyBlue",
    element: <ImgPort />,
  },
  {
    label: "사이드 작업",
    content1: "꾸준히 성장하고",
    content2: "싶으신가요?",
    backgroundColor: "blue",
    element: <ImgSide />,
  },
];

const carouselList = [
  {
    itemId: 1,
    title: "디자이너용 코딩 지식은 따로 있다?",
    content: "《디자이너를 위한 코딩 워크숍》에서 2달 만에 코딩 역량 장착하기",
    src: "/src/assets/img/img_carousel_1.png",
  },
  {
    itemId: 2,
    title: "인기 콜라보 일러스트레이터로 거듭나기!",
    content: "<커머셜 일러스트 챌린지> 모집중",
    src: "/src/assets/img/img_carousel_2.png",
  },
  {
    itemId: 3,
    title: "현직자 눈에 띄는 UX/UI 프로젝트 완성!",
    content: "5주 완성 UX/UI 리디자인 프로젝트 완성 워크숍 3기",
    src: "/src/assets/img/img_carousel_3.png",
  },
  {
    itemId: 4,
    title: "5주 만에 완성하는 포트폴리오 챌린지!",
    content: "매주 새로운 프로젝트 주제 + 온라인 피드백 제공",
    src: "/src/assets/img/img_carousel_4.png",
  },
  {
    itemId: 5,
    title: "내 아이패드 심폐소생 프로젝트",
    content: "드로잉 기초부터 나만의 작품 완성까지, 아이패드 드로잉 워크숍",
    src: "/src/assets/img/img_carousel_5.png",
  },
];

const carouselTemList = [
  {
    itemId: 1,
    src: "/src/assets/img/img_carousel_all_1.png",
  },
  {
    itemId: 2,
    src: "/src/assets/img/img_carousel_all_2.png",
  },
  {
    itemId: 3,
    src: "/src/assets/img/img_carousel_all_3.png",
  },
  {
    itemId: 4,
    src: "/src/assets/img/img_carousel_all_4.png",
  },
  {
    itemId: 5,
    src: "/src/assets/img/img_carousel_all_5.png",
  },
];

export {
  navCategory,
  outLinkCategory,
  commuityCategory,
  communityArticle,
  communityNav,
  carouselList,
  carouselTemList,
};
