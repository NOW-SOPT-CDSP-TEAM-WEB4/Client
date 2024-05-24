import { IcJaein, IcKush, IcMozza, IcPindit, IcStudioKio } from "../../assets";
import ImgJaein1 from "../../assets/img/img_jaein_1.png";
import ImgJaein2 from "../../assets/img/img_jaein_2.png";
import ImgJaein3 from "../../assets/img/img_jaein_3.png";
import ImgKush1 from "../../assets/img/img_KUSH_1.png";
import ImgKush2 from "../../assets/img/img_KUSH_2.png";
import ImgKush3 from "../../assets/img/img_KUSH_3.png";
import ImgMozza1 from "../../assets/img/img_Mozza_1.png";
import ImgMozza2 from "../../assets/img/img_Mozza_2.png";
import ImgMozza3 from "../../assets/img/img_Mozza_3.png";
import ImgPindit1 from "../../assets/img/img_pindit_1.png";
import ImgPindit2 from "../../assets/img/img_pindit_2.png";
import ImgPindit3 from "../../assets/img/img_pindit_3.png";

export const notefolioRecommendList = [
  {
    id: 0,
    imgSrc: ["/src/assets/img/img_kio_1.png", "/src/assets/img/img_kio_2.png", "/src/assets/img/img_kio_3.png"],
    companyLogo: <IcStudioKio />,
    company: "StudioKio",
  },
  {
    id: 1,
    imgSrc: [ImgPindit1, ImgPindit2, ImgPindit3],
    companyLogo: <IcPindit />,
    company: "핀딧스튜디오",
    content: "그래픽 디자인 | 캐릭터 ...",
  },
  {
    id: 2,
    imgSrc: [ImgKush1, ImgKush2, ImgKush3],
    companyLogo: <IcKush />,
    company: "KUSH",
  },
  {
    id: 3,
    imgSrc: [ImgMozza1, ImgMozza2, ImgMozza3],
    companyLogo: <IcMozza />,
    company: "Mozza",
    content: "그래픽 디자인 | ...",
  },
  {
    id: 4,
    imgSrc: [ImgJaein1, ImgJaein2, ImgJaein3],
    companyLogo: <IcJaein />,
    company: "JAE IN",
  },
];
