import React from 'react';
import { Typography, Container } from '@mui/material';

import RedirectList from '../components/RedirectList';
import RedirectForm from '../components/RedirectForm';


function NavBar() {
    return (
        <div>
            <Container>
                <Typography variant="h4" gutterBottom>
                    Promotea
                </Typography>
                <RedirectList />
            </Container>
        </div>

    );
}

export default NavBar;