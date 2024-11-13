import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationMenu from './components/NavigationMenu';
import HomePage from './pages/HomePage';
import RedirectsPage from './pages/RedirectsPage';
import NotFoundPage from './pages/NotFoundPage';
import EditRedirectPage from './pages/EditRedirectPage';
import CreateRedirectPage from './pages/CreateRedirectPage';
import theme from './theme';

import { ThemeProvider } from '@mui/material/styles';


function App() {
  const existingRedirect = {
    nfcId: '123456',
    url: 'https://example.com',
    name: 'Example Redirect',
    description: 'This is an example redirect',
    enabled: true,
    initializedByUser: false,
    createdBy: 'Admin',
    updatedBy: 'Admin',
    tags: ['example', 'redirect']
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/edit/:nfcId" element={<EditRedirectPage existingRedirect={existingRedirect}/>} />
          <Route path="/create-redirect" element={<CreateRedirectPage existingRedirect={existingRedirect} />} />
          <Route path="/redirects" element={<RedirectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
