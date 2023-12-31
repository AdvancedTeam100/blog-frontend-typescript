import { createTheme } from "@mui/material/styles";
import { blue, green, purple, } from "@mui/material/colors";
import "@fontsource/noto-sans-jp"; // Defaults to weight 400
import "@fontsource/noto-sans-jp/400.css"; // Specify weight


interface IColor {
  main: string,
  main800: string,
  grey1: string
}

export const ThemeColor: IColor = {
  main: blue[700],
  main800: blue[900],
  grey1 : '#f1f3f4'
}

// import "@fontsource/noto-sans-jp/400-italic.css"; // Specify weight and style
export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#5f5f60 #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "rgb(61, 61, 63)",
              width: '0.7em'
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: "3px solid #2b2b2b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
    },

    
    palette: {
      primary: {//bgcolor
        main: blue[500],
        600: blue[600],
        700: blue[700],
        800: blue[800],
        900: blue[900],
        A100: blue['A100'],
        A200: blue['A200'],
        light: "#ffffff",
        dark: "#0b2948",
      },
      secondary: {//color
        main: purple[500],
        light: "#607489",
        dark: "#8ba1b7",
      },
      info: {//header bgcolor
        main: blue[100],
        200: blue[200],
        light: "#051e3932",
        dark: "#031d35d5",
      },
      success: {//header color
        main: green[300],
        light: "#000f1f32",
        dark: "#8ba1b7",
      },
      common: {
        black: '#000000',
        white: '#ffffff',
      },


      
    },
    shape: {
      // borderRadius: 5, // Adjust the value as per your preference
    },
    typography: {
      fontFamily: 'Noto Sans JP, Arial, sans-serif', // Set the Japanese font as the first option
      
    },
    // typography: {
    //   fontFamily: "Noto Sans JP", // Set the Japanese font as the first option
    // },
  });



