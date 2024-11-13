import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import promoteaLogo from '../assets/promotea-logo.png'; // Assuming the image is in src/assets


// Import SVG image as a React component (if using an SVG file)
// import { ReactComponent as PromoteaIcon } from '../assets/promotea-icon.svg';

function NavBar() {
    return (
        <Container maxWidth="md">
            <Box mt={2}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Promotea!
                </Typography>
                <img src={promoteaLogo} alt="Promotea Logo" style={{ width: '200px', height: 'auto', marginTop: '20px' }} />
                <Typography variant="body1" mt={2}>
                    Promotea is our new service to help businesses of all sizes promote their brand and reach a wider audience.
                    With powerful analytics, seamless integrations, and tailored strategies, Promotea empowers you to grow
                    your business effectively.
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                    With powerful analytics, seamless integrations, and tailored strategies,
                    Promotea empowers you to engage with new customers and grow your brand.
                </Typography>
            </Box>
        </Container>
    );
}

export default NavBar;