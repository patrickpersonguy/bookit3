import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Typography, Button, ThemeProvider, createTheme, Menu, MenuItem, Alert, Paper } from '@mui/material';
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
            <Paper elevation={3} key={book.BookName} className="book-card" style={{ backgroundColor: '#27353D', padding: '20px', borderRadius: '10px', display: "flex", flexDirection: "column", alignItems: "right", width: "250px"}}>
                <img src={book.BookImage} alt={book.BookName} style={{ width: '100%', marginBottom: '10px', borderRadius: '5px', alignItems: 'center' }} />
                <TypographyStyles variant="h6" style={{ marginBottom: '5px' }}>{book.BookName}</TypographyStyles>
                <TypographyStyles variant="subtitle1" style={{ marginBottom: '5px' }}>By {book.BookAuthor}</TypographyStyles>
                <TypographyStyles variant="subtitle2" style={{ marginBottom: '10px' }}>{book.BookGenre}</TypographyStyles>
                <TypographyStyles variant="body1" style={{ marginBottom: '10px' }}>{book.BookDesc}</TypographyStyles>
                <Button variant="contained" color="secondary" onClick={() => handleHideBook(book.BookName)} style={{ alignItems: 'left ', width: "5px"}}>
                    HIDE
                </Button>
                <Button variant="contained" color="primary" onClick={() => handleLikeBook(book.BookName)} style={{ alignItems: 'left ', width: "5px"}}>
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

    return (
        <ThemeProvider theme={theme}>
            <div style={{ padding: "20px" }}>
                {genres.map((genre) => (
                    <div key={genre}>
                        <TypographyStyles variant="h5" style={{ marginBottom: '20px' }}>{genre}</TypographyStyles>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            {bookCardsData.filter((book) => book && book.props.children[3].props.children === genre)}
                        </div>
                    </div>
                ))}
            </div>
        </ThemeProvider>
    );
};

export default BookCards;