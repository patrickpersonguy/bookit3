import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Stack } from '@mui/material';
import NavBar from '../components/NavBar';
import BookCards from '../components/BookCards';

const bgStyles = makeStyles({ 
    bg: {
        backgroundColor: "#2F4049",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh" 
    },
    navBar: {
        height: "64px"
    }
})

function AppView(){
    const background = bgStyles()
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return(
        <Container className={background.bg} display="flex" justifyContent="flex-end" maxWidth="100%" position="fixed" style={{ overflow: "hidden"}}>
            <Box className={background.navBar}>
                <NavBar onSearch={handleSearch} />
            </Box>
            <Stack direction="row" justifycontent="flex-end">
                <Box width={"8%"} height={"100vh"} style={{ flexShrink: 0 }}/>
                <Container display="flex" justifyContent="flex-end" maxWidth="100%" style={{ marginBottom: "10px" }}>
                    <BookCards searchQuery={searchQuery} />
                </Container>
            </Stack>
        </Container>
    )
}

export default AppView;