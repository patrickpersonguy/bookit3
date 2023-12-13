import React, { useState } from 'react';
import { styled, Box, AppBar, Toolbar, InputBase, Avatar, Typography } from '@mui/material';
import SearchBar from './SearchBar';
import bookdbtest from '../bookdbtest';

const headerText = styled(Typography)({
    color: "#FDF6EA",
    fontFamily: "Outfit",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "20px"
});

const Text = styled(Typography)({
    color: "#FDF6EA",
    fontFamily: "Outfit",
    fontSize: "16px",
    padding: "20px"
});

const AppBarStyled = styled(AppBar)({
    backgroundColor: "#445A65",
});

const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const SearchBarStyled = styled(SearchBar)({
    backgroundColor: "#5A7887",
    padding: "0 10px",
    borderRadius: "10px",
    width: "50%",
    color: "#202B32"
});

const IconStyled = styled(Box)({
    padding: "0 10px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center"
});

const NavBar= () =>{
    return (
        <AppBarStyled width="70px">
            <ToolbarStyled>
                <h2>book.it</h2>
                    <SearchBarStyled placeholder="Search for a book..." data={bookdbtest}/>
                <IconStyled>
                </IconStyled>
            </ToolbarStyled>
        </AppBarStyled>
    )
}

export default NavBar;