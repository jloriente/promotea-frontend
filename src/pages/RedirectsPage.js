import React from 'react';
import { Typography, Container } from '@mui/material';

import RedirectList from '../components/RedirectList';
import RedirectForm from '../components/RedirectForm';


function NavBar() {
    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Welcome to Promotea
                </Typography>
            </Container>
            <RedirectForm />
            <RedirectList />
        </div>

    );
}

export default NavBar;