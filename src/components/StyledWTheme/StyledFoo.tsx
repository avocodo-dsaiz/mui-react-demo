import * as React from 'react';
import { createTheme, styled, ThemeProvider, darken } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

declare module '@mui/material/styles' {
  interface Palette {
    lemon: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    lemon?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lemon: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF1053',
    },
    secondary: {
      main: '#F17300'
    },
    lemon: {
      main: '#E7F9A9',
      contrastText: '#9A9B73',
    },
  }
});

const CustomizedSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};

  :hover {
    color: ${darken(theme.palette.secondary.main, 0.01)};
  }
`,
);

const CustomizedButton = styled(Button)(({theme}) => `
  color: ${theme.palette.primary.main};
  margin-top: 5px;
  padding: 15px;
`);

export default function StyledFoo () {
  return (
    <Box sx={{ width: 500 }}>
      <ThemeProvider theme={customTheme}>
        <CustomizedSlider defaultValue={30} />
        <Button color="lemon" variant="contained">
          Neutral Button with Custom Variable
        </Button>
        <CustomizedButton color="lemon" variant="contained">
          Customized Button with Custom Variable
        </CustomizedButton>
      </ThemeProvider>
    </Box>
  );
}