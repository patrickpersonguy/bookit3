import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import bookdbtest from '../bookdbtest';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        backgroundColor: "#202B32",
    },
    textheader: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "25px",
        padding: "20px"
    },
    text: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "25px",
        padding: "20px"
    },
    sideButton: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "22px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#27353D",
        },
        paddingLeft: "20px"
    },
    linkStyles: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "22px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#27353D",
        },
        paddingLeft: "20px"
    },
    genreButton: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "22px",
        fontWeight: "bold",
        "&:hover": {
            backgroundColor: "#27353D",
        },
        paddingLeft: "20px",
        marginTop: "10px"
    }
}));

function AppSideBar() {
    const classes = useStyles();
    const [allGenres, selectedGenres, setSelectedGenres] = useState([]);
   // const allGenres = bookdbtest.BookGenre;
    //^^^this connects to the temporary book database, change to connect to actual book db

    const handleGenreSelection = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    return (
        <Box className={classes.sidebar} flexGrow={1} width={"30px"} height={"100vh"} position="sticky">
            <h2 className={classes.textheader}>book.it</h2>
            <p className={classes.text}>
                There's no such thing
                as too many books!
            </p>

            <Stack spacing={0.1} direction="column">
                {allGenres.map((genre) => (
                    <Button
                        key={genre}
                        className={classes.genreButton}
                        onClick={() => handleGenreSelection(genre)}
                        style={{ backgroundColor: selectedGenres.includes(genre) ? "#27353D" : "" }}
                    >
                        {genre}
                    </Button>
                ))}
            </Stack>

            <Stack spacing={0.1} direction="column">
                <Link to="/a" className={classes.linkStyles}>
                    <Button className={classes.sideButton}>about us</Button>
                </Link>
                <Link to="/faq" className={classes.linkStyles}>
                    <Button className={classes.sideButton}>faq</Button>
                </Link>
                <Link to="/contact" className={classes.linkStyles}>
                    <Button className={classes.sideButton}>contact us</Button>
                </Link>
            </Stack>
        </Box>
    );
}

export default AppSideBar;