import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import BookCards from '../components/BookCards';

const bgStyles = makeStyles({ 
    bg: {
        backgroundColor: "#2F4049",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh" 
    },
    navBar: {
        height: "64px"
    }
})

function AppView(){
    const background = bgStyles()

    return(
        <Box className={background.bg}>
            <Box className={background.navBar}>
                <NavBar/>
            </Box>
            <Box flexGrow={1} display="flex" justifyContent="flex-end">
                <BookCards/>
            </Box>
        </Box>
    )
}

export default AppView;