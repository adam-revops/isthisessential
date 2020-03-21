/**
 * Basic theme
 */

const palette = {
  primary: {
    contrast: 'orange',
    main: 'white',
  },
  secondary: {
    contrast: '#aaa',
    main: '#black',
    dark: '#181818',
  },
};

const baseSize = 16;

const typography = {
  baseFontSize: `${baseSize}px`,
};

const zIndex = {
  header: 10,
  overlay: 15,
  drawer: 20,
  headerText: 25,
};

export default {
  palette,
  typography,
  zIndex,
  size: size => `${size * baseSize}px`,
};
