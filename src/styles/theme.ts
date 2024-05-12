import { css } from "styled-components";

const colors = {
  b01: "#000000",
  b02: "#0D0D0D",
  b03: "#161C1C",
  b04: "#231F20",
  b05: "#2C3030",
  b06: "#A6A6A6",
  b07: "#A1A6A6",
  b08: "#768585",
  b09: "#7C8484",

  w01: "#FFFFFF",

  g01: "#F9FAFC",
  g02: "#F0F5F5",
  g03: "#E4E8E8",
  g04: "#DFDFDF",
  g05: "#E1E1E1",

  o01: "#FFF5DA",
  o02: "#FF7900",
  o03: "#FFF1E1",

  gg01: "#00CD80",
  gg02: "#01BA61",

  bb01: "#EDFBFB",
  bb02: "#E7F3FF",
  bb03: "#1ECAD3",
  bb04: "#05BCC6",
  bb05: "#1289F6",
};

const fonts = {
  Bold40_56: css`
    font-family: "Pretendard";
    font-size: 4rem;
    line-height: 5.6rem;
    font-weight: 700;
  `,
  Bold32_Auto: css`
    font-family: "Pretendard";
    font-size: 3.2rem;
    line-height: auto;
    font-weight: 700;
  `,
  Bold28_36: css`
    font-family: "Pretendard";
    font-size: 2.8rem;
    line-height: 3.6rem;
    font-weight: 700;
  `,
  Bold24_32: css`
    font-family: "Pretendard";
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
  `,
  Bold20_28: css`
    font-family: "Pretendard";
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 700;
  `,
  Bold18_26: css`
    font-family: "Pretendard";
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 700;
  `,
  Regular18_26: css`
    font-family: "Pretendard";
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-weight: 400;
  `,
  Bold16_24: css`
    font-family: "Pretendard";
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 700;
  `,
  SemiBold16_24: css`
    font-family: "Pretendard";
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  `,
  Regular16_Auto: css`
    font-family: "Pretendard";
    font-size: 1.6rem;
    line-height: auto;
    font-weight: 400;
  `,
  Bold15_24: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 700;
  `,
  Bold15_18: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 700;
  `,
  SemiBold15_24: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 600;
  `,
  SemiBold15_18: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 600;
  `,
  Regular15_Auto: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: auto;
    font-weight: 400;
  `,
  Regular15_24: css`
    font-family: "Pretendard";
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 400;
  `,
  Bold14_22: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 700;
  `,
  SemiBold14_22: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 600;
  `,
  Medium14_22: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 500;
  `,
  Regular14_22: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
  `,
  SemiBold14_17: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 600;
  `,
  Medium14_Auto: css`
    font-family: "Pretendard";
    font-size: 1.4rem;
    line-height: auto;
    font-weight: 500;
  `,
  Bold13_16: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 700;
  `,
  SemiBold13_22: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 2.2rem;
    font-weight: 600;
  `,
  SemiBold13_20: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 600;
  `,
  Medium13_20: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
  `,
  Regular13_20: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
  `,
  Medium13_Auto: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: auto;
    font-weight: 500;
  `,
  Regular13_16: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-weight: 400;
  `,
  Regular13_Auto: css`
    font-family: "Pretendard";
    font-size: 1.3rem;
    line-height: auto;
    font-weight: 400;
  `,
  Bold12_16: css`
    font-family: "Pretendard";
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 700;
  `,
  Bold11_13: css`
    font-family: "Pretendard";
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-weight: 700;
  `,
  Regular11_13: css`
    font-family: "Pretendard";
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-weight: 400;
  `,
  Button: css`
    font-family: "Pretendard";
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 800;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
