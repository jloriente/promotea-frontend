import React, {useEffect} from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';

import NavigationMenu from './components/NavigationMenu';
import CreateRedirectPage from './pages/CreateRedirectPage';
import EditRedirectPage from './pages/EditRedirectPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import RedirectsPage from './pages/RedirectsPage';
import theme from './theme';

import { ThemeProvider } from '@mui/material/styles';


function App() {
  // const existingRedirect = {
  //   nfcId: '123456',
  //   url: 'https://example.com',
  //   name: 'Example Redirect',
  //   description: 'This is an example redirect',
  //   enabled: true,
  //   initializedByUser: false,
  //   createdBy: 'Admin',
  //   updatedBy: 'Admin',
  //   tags: ['example', 'redirect']
  // };

  function RouteLogger() {
    const location = useLocation();
  
    useEffect(() => {
      console.log('Navigated to:', location.pathname);
    }, [location]);
  
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <RouteLogger />
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/redirects" element={<RedirectsPage />} />
          <Route path="/redirects/:nfcId" element={<EditRedirectPage/>} />
          <Route path="/redirect?mode=create" element={<CreateRedirectPage/>} />
          <Route path="/create-redirect" element={<CreateRedirectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
