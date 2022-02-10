const color = {
  black: "#212121",

  grayDarkest: "#242424",
  grayDarker: "#616161",
  grayDark: "#757575",
  gray: "#9E9E9E",
  grayLight: "#BDBDBD",
  grayLighter: "#E0E0E0",
  grayLightest: "#EEE",

  white: "#FFF",

  redDarkest: "#B71C1C",
  redDarker: "#C62828",
  redDark: "#D32F2F",
  red: "#F44336",
  redLight: "#EF5350",
  redLighter: "#E57373",
  redLightest: "#EF9A9A",

  blueDarkest: "#0D47A1",
  blueDarker: "#1565C0",
  blueDark: "#1976D2",
  blue: "#2196F3",
  blueLight: "#42A5F5",
  blueLighter: "#64B5F6",
  blueLightest: "#90CAF9",

  purpleDarkest: "#4A148C",
  purpleDarker: "#6A1B9A",
  purpleDark: "#7B1FA2",
  purple: "#9C27B0",
  purpleLight: "#AB47BC",
  purpleLighter: "#BA68C8",
  purpleLightest: "#CE93D8",

  greenDarkest: "#1B5E20",
  greenDarker: "#2E7D32",
  greenDark: "#388E3C",
  green: "#4CAF50",
  greenLight: "#66BB6A",
  greenLighter: "#81C784",
  greenLightest: "#a5D6A7",
};

export const theme = {
  text: {
    size: {
      s: 14,
      base: 16,
      m: 18,
      l: 20,
      xl: 24,
    },
    weight: {
      light: "200",
      normal: "400",
      bold: "700",
    },
    spacing: {
      tight: 0.8,
      normal: 1,
      wide: 1.5,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      large: 2,
    },
    fonts: {
      base: null,
    },
  },
  color,
  space: {
    xs: 8,
    s: 16,
    m: 24,
    l: 36,
    xl: 40,
  },
  radius: {
    xs: 6,
    s: 10,
    base: 14,
    l: 20,
    xl: 30,
  },
  opacity: {
    none: 0,
    low: 0.3,
    demi: 0.5,
    high: 0.8,
    base: 1,
  },
  shadows: [
    {
      shadowColor: color.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 1,
    },
    {
      shadowColor: color.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.6,
      shadowRadius: 5,
    },
  ],
  borders: [
    {
      borderWidth: 1,
      borderColor: color.black,
    },
    {
      borderWidth: 2,
      borderColor: color.black,
    },
    {
      borderWidth: 5,
      borderColor: color.black,
    },
  ],
  button: {
    disabled: {
      opacity: 0.5,
    },
  },
};
