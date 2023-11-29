import { Box } from '@mui/material';
import React from 'react';
import AppSideBar from '../layouts/AppSideBar';
import NavBar from '../components/NavBar';

function AboutPage(){
    return(
        <Box>
            <AppSideBar/>
            <NavBar/>
            <p>About us</p>
        </Box>
    );
}

export default AboutPage;
