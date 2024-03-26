import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0067EE",
    },
    info: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    // Esto sobrescribe los estilos globales para todos los elementos de MUI
    MuiCssBaseline: {
      styleOverrides: `
        * {
          scrollbar-width: thin;
          scrollbar-color: #C6C6C6 transparent;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background-color: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
          background-color: #C6C6C6;
          border-radius: 8px;
        }
      `,
    },
  },
});
