import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Stack, InputBase } from '@mui/material';
import BookCards from '../components/BookCards';
import NavBar from '../components/NavBar';

const bgStyles = makeStyles({ 
    bg: {
        backgroundColor: "#2F4049",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh" 
    }
});

const AppView = () => {
    const background = bgStyles();
    const genreRefs = useRef([]);

    const scrollToGenre = (genre) => {
        const genreElement = genreRefs.current[genre];
        if (genreElement) {
            const offsetTop = genreElement.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <Container className={background.bg} display="flex" justifyContent="flex-end" maxWidth="100%" style={{ overflow: "hidden"}}>
            <NavBar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Stack direction="row" justifycontent="flex-end">
                <Box width={"8%"} height={"100vh"} style={{ flexShrink: 0 }}/>
                <Container display="flex" justifyContent="flex-end" maxWidth="100%" style={{ marginBottom: "10px" }}>
                    <BookCards onGenreClick={scrollToGenre} genreRefs={genreRefs}/>
                </Container>
            </Stack>
        </Container>
    );
}

export default AppView;