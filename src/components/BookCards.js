import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography, Button, ThemeProvider, createTheme, Menu, MenuItem, Alert, Paper, Icon } from '@mui/material';
import { styled } from '@mui/styles';
import bookdbtest from '../bookdbtest';  //remember to comment this out when you're gonna try and connect the book db
// this is just a temporary dbbbb
//the elements are BookImage, BookAuthor, BookName, BookGenre, BookDesc, BookPDFs, and BookOnlineRead

const theme = createTheme({
    typography: {
        fontFamily: 'Outfit',
        color: "#FDF6EA",
    },
    palette: {
        primary: {
            main: '#47d247',
        },
    },
});

const TypographyStyles = styled(Typography)({
    fontFamily: 'Outfit',
    color: "#FDF6EA",
})

const BookCards = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [hiddenBooks, setHiddenBooks] = useState([]);
    const [likedBooks, setLikedBooks] = useState([]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHideBook = (BookName) => {
        setHiddenBooks([...hiddenBooks, BookName]);

        <Alert severity='info'>You've hidden the book.</Alert>
    };

    const handleLikeBook = (BookName) => {
        setLikedBooks([...likedBooks, BookName]);
    };

    //i think this is where you will make most of your changes, jeaaaa, hopefully the names of each db element is the sammeee huhu
    const bookCardsData = bookdbtest && bookdbtest.map((book) => {
        if (hiddenBooks.includes(book.BookName)) {
            return null;
        }
        return (
            <Paper elevation={3} key={book.BookName} className="book-card" style={{ 
                backgroundColor: '#27353D', 
                padding: '20px', 
                borderRadius: '10px', 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "right", 
                width: "250px",
                marginBottom: "20px"
                }}>
                <img src={book.BookImage} alt={book.BookName} style={{ width: '100%', marginBottom: '10px', borderRadius: '5px', alignItems: 'center' }} />
                <TypographyStyles variant="h6" style={{ marginBottom: '5px' }}>{book.BookName}</TypographyStyles>
                <TypographyStyles variant="subtitle1" style={{ marginBottom: '5px' }}>By {book.BookAuthor}</TypographyStyles>
                <TypographyStyles variant="subtitle2" style={{ marginBottom: '10px' }}>{book.BookGenre}</TypographyStyles>
                <TypographyStyles variant="body1" style={{ marginBottom: '10px' }}>{book.BookDesc}</TypographyStyles>
                <Button variant="contained" color="secondary" onClick={() => handleHideBook(book.BookName)} style={{ alignItems: 'right ', width: "5px"}}>
                    HIDE
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleLikeBook(book.BookName)} style={{ alignItems: 'right ', width: "5px"}}>
                    LIKE
                </Button>
                <Button variant="contained" color="primary" onClick={handleClick} style={{ alignItems: 'right '}}>
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

    const scrollLeft = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        container.scrollLeft -= 200; 
    };

    const scrollRight = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        container.scrollLeft += 200; 
        
    };

    const IconButton = styled(Icon)({
        color: "#FDF6EA",
        opacity: "0.5",
        "&:hover":{opacity: "1"}
    })

    const handleScrollLeft = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        container.scrollLeft -= 200;
    };

    const handleScrollRight = (genre) => {
        const container = document.getElementById(`genre-${genre}`);
        container.scrollLeft += 200;
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ padding: "20px" }}>
                {genres.map((genre) => (
                    <div key={genre}>
                        <TypographyStyles variant="h5" style={{ marginBottom: '20px' }}>{genre}</TypographyStyles>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <IconButton onClick={() => handleScrollLeft(genre)}>
                                <ArrowBackIosIcon/>
                            </IconButton>
                            <div
                                key={genre}
                                id={`genre-${genre}`}
                                style={{
                                    display: "flex",
                                    overflowX: "auto",
                                    scrollBehavior: "smooth",
                                    gap: "20px",
                                }}
                            >
                                {bookCardsData
                                    .filter((book) => book && book.props.children[3].props.children === genre)
                                    .slice(0, 3)}
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