import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',      // Light green
      light: '#81c784',     // Lighter green for hover states
      dark: '#388e3c',      // Darker green for contrast
    },
    secondary: {
      main: '#80deea',      // Light teal for secondary actions
      light: '#b2ebf2',
      dark: '#4bacb8',
    },
    background: {
      default: '#f5f5f5',    // Light grey background for the overall app
      paper: '#ffffff',      // White background for cards and other components
    },
    text: {
      primary: '#2e2e2e',    // Dark grey for main text
      secondary: '#616161',  // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 700 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 400 },
    h6: { fontSize: '1rem', fontWeight: 400 },
    button: {
      textTransform: 'none', // Keep button text casing normal (not uppercase)
    },
  },
  shape: {
    borderRadius: 10,       // Rounded corners for a more modern feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // More rounded buttons
          padding: '8px 16px',
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#4caf50', // Primary green color for the AppBar
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for modern look
          borderRadius: 15,
          padding: '20px',
        },
      },
    },
  },
});

export default theme;