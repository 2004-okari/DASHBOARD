import { createTheme } from '@mui/material/styles';
import { useState, useMemo, createContext } from 'react';

export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      primary: {
        100: '#cdd2d6',
        200: '#9ba4ad',
        300: '#687784',
        400: '#36495b',
        500: '#041c32',
        600: '#031628',
        700: '#02111e',
        800: '#020b14',
        900: '#01060a',
      },
      neutral: {
        100: '#ffffff',
        200: '#ffffff',
        300: '#ffffff',
        400: '#ffffff',
        500: '#ffffff',
        600: '#cccccc',
        700: '#999999',
        800: '#666666',
        900: '#333333',
      },
      secondary: {
        100: '#cfd8d8',
        200: '#9fb1b2',
        300: '#6f8b8b',
        400: '#3f6465',
        500: '#0f3d3e',
        600: '#0c3132',
        700: '#092525',
        800: '#061819',
        900: '#030c0c',
      },
    }
    : {
      primary: {
        100: '#01060a',
        200: '#020b14',
        300: '#02111e',
        400: '#031628',
        500: '#041c32',
        600: '#36495b',
        700: '#687784',
        800: '#9ba4ad',
        900: '#cdd2d6',
      },
      neutral: {
        100: '#333333',
        200: '#666666',
        300: '#999999',
        400: '#cccccc',
        500: '#f2f2f2',
        600: '#ffffff',
        700: '#ffffff',
        800: '#ffffff',
        900: '#ffffff',
      },
      secondary: {
        100: '#030c0c',
        200: '#061819',
        300: '#092525',
        400: '#0c3132',
        500: '#0f3d3e',
        600: '#3f6465',
        700: '#6f8b8b',
        800: '#9fb1b2',
        900: '#cfd8d8',
      },
    }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.secondary[500],
          },
          neutral: {
            dark: colors.primary[600],
            main: colors.neutral[500],
            light: colors.primary[100],
          },
          background: {
            default: colors.primary[500],
          },
        }
        : {
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.secondary[500],
          },
          neutral: {
            dark: colors.primary[600],
            main: colors.neutral[500],
            light: colors.primary[100],
          },
          background: {
            default: colors.primary[500],
          },
        }),
    },
  };
};

export const ColorModeContext = () => createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
