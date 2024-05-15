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
    font-weight: 700;
    font-size: 4rem;
    line-height: 5.6rem;
    font-family: "Pretendard", serif;
  `,
  Bold32_Auto: css`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Bold28_36: css`
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.6rem;
    font-family: "Pretendard", serif;
  `,
  Bold24_32: css`
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-family: "Pretendard", serif;
  `,
  Bold20_28: css`
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.8rem;
    font-family: "Pretendard", serif;
  `,
  Bold18_26: css`
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-family: "Pretendard", serif;
  `,
  Regular18_26: css`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.6rem;
    font-family: "Pretendard", serif;
  `,
  Bold16_24: css`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold16_24: css`
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
  Regular16_Auto: css`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Bold15_24: css`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
  Bold15_18: css`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold15_24: css`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold15_18: css`
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-family: "Pretendard", serif;
  `,
  Regular15_Auto: css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Regular15_24: css`
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
  Bold14_22: css`
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold14_22: css`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-family: "Pretendard", serif;
  `,
  Medium14_22: css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-family: "Pretendard", serif;
  `,
  Regular14_22: css`
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold14_17: css`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-family: "Pretendard", serif;
  `,
  Medium14_Auto: css`
    font-weight: 500;
    font-size: 1.4rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Bold13_16: css`
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold13_22: css`
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 2.2rem;
    font-family: "Pretendard", serif;
  `,
  SemiBold13_20: css`
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 2rem;
    font-family: "Pretendard", serif;
  `,
  Medium13_20: css`
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 2rem;
    font-family: "Pretendard", serif;
  `,
  Regular13_20: css`
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2rem;
    font-family: "Pretendard", serif;
  `,
  Medium13_Auto: css`
    font-weight: 500;
    font-size: 1.3rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Regular13_16: css`
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.6rem;
    font-family: "Pretendard", serif;
  `,
  Regular13_Auto: css`
    font-weight: 400;
    font-size: 1.3rem;
    line-height: auto;
    font-family: "Pretendard", serif;
  `,
  Bold12_16: css`
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-family: "Pretendard", serif;
  `,
  Bold11_13: css`
    font-weight: 700;
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-family: "Pretendard", serif;
  `,
  Regular11_13: css`
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.3rem;
    font-family: "Pretendard", serif;
  `,
  Button: css`
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-family: "Pretendard", serif;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
