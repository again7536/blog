const colors = {
  blue100: '#33CFFF',
  blue200: '#00BCF5',
  blue300: '#0081A7',
  blue400: '#005E7A',
  blue500: '#002F3D',
  blue: '#0081A7',
  'blue-light': '#33CFFF',

  green100: '#33F5FF',
  green200: '#00E9F5',
  green300: '#00AFB9',
  green400: '#00747A',
  green500: '#003A3D',
  green: '#00AFB9',
  'green-light': '#33F5FF',

  yellow100: '#FDFCDC',
  yellow200: '#FBF8B2',
  yellow300: '#F7F378',
  yellow400: '#F4EE3E',
  yellow500: '#E7E00D',
  yellow: '#FDFCDC',
  'yellow-light': '#FDFCDC',

  orange100: '#FED9B7',
  orange200: '#FDC080',
  orange300: '#FCA04A',
  orange400: '#FB810E',
  orange500: '#C96303',
  orange: '#FED9B7',
  'orange-light': '#FED9B7',

  red100: '#F6A8A2',
  red200: '#F07167',
  red300: '#EB3F33',
  red400: '#CC2014',
  red500: '#95180F',
  red: '#F07167',
  'red-light': '#F6A8A2',
};

const theme = {
  name: 'default',
  colors,
};

type ThemeType = typeof theme;

export { theme };
export type { ThemeType };
