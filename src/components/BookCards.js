import React, { useState, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography, Button, ThemeProvider, createTheme, Menu, MenuItem, Paper, Icon, Card } from '@mui/material';
import { styled } from '@mui/styles';
import bookdbtest from '../bookdbtest';  //remember to comment this out when you're gonna try and connect the actual book db
// this is just a temporary dbbbb
//the elements are BookImage, BookAuthor, BookName, BookGenre, BookDesc, BookPDFs, and BookOnlineRead

const theme = createTheme({
    typography: {
        fontFamily: 'Outfit',
        color: "#FDF6EA",
    },
    palette: {
        primary: {
            main: '#FFC30D',
        },
    },
});

const TypographyStyles = styled(Typography)({
    fontFamily: 'Outfit',
    color: "#FDF6EA",
})

const BookCards = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const genreRefs = useRef({});

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //i think this is where you will make most of your changes, jeaaaa, hopefully the names of each db element is the sammeee huhu
    //but dont stress lang if there's no time, we can just use bookdbtest.js, just replace BookPDF and BookOnlineRead with the actual links and .pdf files for the books
    const bookCardsData = bookdbtest && bookdbtest.map((book) => {
        return (
            <Paper elevation={3} key={book.BookName} className="book-card" style={{ 
                backgroundColor: '#27353D', 
                padding: '20px', 
                borderRadius: '10px', 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "right", 
                width: "250px",
                height: "400px",
                marginBottom: "20px",
                flexShrink: 0
                }}>
                <img src={book.BookImage} alt={book.BookName} style={{ width: '100%', marginBottom: '10px', borderRadius: '5px', alignItems: 'center' }} />
                <TypographyStyles variant="h6" style={{ marginBottom: '5px' }}>{book.BookName}</TypographyStyles>
                <TypographyStyles variant="subtitle1" style={{ marginBottom: '5px' }}>By {book.BookAuthor}</TypographyStyles>
                <TypographyStyles variant="subtitle2" style={{ marginBottom: '10px' }}>{book.BookGenre}</TypographyStyles>
                <TypographyStyles variant="body1" style={{ marginBottom: '10px' }}>{book.BookDesc}</TypographyStyles>
                <Button variant="contained" color="primary" onClick={handleClick} style={{ 
                    alignSelf: 'flex-end',
                    marginTop: 'auto'
                }}>
                    READ!
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    color="primary"
                >  
                    <MenuItem onClick={handleClose}>
                        <a href={book.BookPDFs} target="_blank" rel="noopener noreferrer">
                            PDF File
                        </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <a href={book.BookOnlineRead} target="_blank" rel="noopener noreferrer">
                            Read Online 
                        </a>
                    </MenuItem>
                </Menu>
            </Paper>
        );
    });

    const genres = [...new Set(bookdbtest.map((book) => book.BookGenre))];

    const IconButton = styled(Icon)({
        color: "#FDF6EA",
        opacity: "0.5",
        "&:hover":{opacity: "1"}
    })

    const handleScrollLeft = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        if (container) {
            container.scrollLeft -= 700;
        }
    };

    const handleScrollRight = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        if (container) {
            container.scrollLeft += 700;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                {genres.map((genre) => (
                    <div key={genre} ref={ref => genreRefs.current[genre] = ref}>
                        <TypographyStyles variant="h4" style={{ marginBottom: '20px' }}>{genre}</TypographyStyles>
                        <div style={{ display: "flex", justifycontent: "space-between", alignItems: "center", width: "100%"}}>
                            <IconButton onClick={() => handleScrollLeft(genre)}>
                                <ArrowBackIosIcon/>
                            </IconButton>
                            <div
                                key={genre}
                                id={`genre-${genre}`}
                                style={{
                                    display: "flex",
                                    overflowY: "auto",
                                    scrollBehavior: "smooth",
                                    gap: "20px",
                                    width: "75%",
                                    justifyContent: "left",
                                    marginBottom: "20px"
                                }}
                            >
                                {bookCardsData
                                    .filter((book) => book && book.props.children[3].props.children === genre)}
                            </div>
                            <IconButton onClick={() => handleScrollRight(genre)}>
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </div>
                    </div>
                ))}
            </div>
        </ThemeProvider>
    );
}

export default BookCards;