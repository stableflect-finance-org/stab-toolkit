import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#6b84cb",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6a91ff",
  background: "#3a475c",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#3f4d5a",
  inputSecondary: "#57738d",
  primaryDark: "#0098A1",
  tertiary: "#5d7192",
  text: "#fcfcfc",
  textDisabled: "#666171",
  textSubtle: "#fcfcfc",
  borderColor: "#524B63",
  card: "#151e36",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #3a475c 0%, #455671 100%)",
  },
};
