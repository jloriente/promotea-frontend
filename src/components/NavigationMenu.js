import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const NavigationMenu = () => (
  <Box sx={{ marginBottom: 4 }}> {/* Adds margin below the AppBar */}
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/redirects">Redirects</Button>
        <Button color="inherit" component={Link} to="/create-redirect">Create New</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavigationMenu;