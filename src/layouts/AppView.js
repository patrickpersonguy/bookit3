import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import BookCards from '../components/BookCards';

const bgStyles = makeStyles({ 
    bg: {
        backgroundColor: "#2F4049",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    }
})

function AppView(){
    const background = bgStyles()

    return(
        <Box className={background.bg}>
            <NavBar/>
            <Box flex={1}>
                <BookCards/>
            </Box>
        </Box>
    )
}

export default AppView;