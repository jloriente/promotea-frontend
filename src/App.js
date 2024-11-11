import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RedirectsPage from './pages/RedirectsPage';
import NotFoundPage from './pages/NotFoundPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme(); // Optional: you can customize the theme here.

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/redirects" element={<RedirectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
