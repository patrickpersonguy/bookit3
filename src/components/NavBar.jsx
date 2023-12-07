import React, { useState } from 'react';
import { styled, Box, AppBar, Toolbar, InputBase, Avatar, Typography } from '@mui/material';
import usersdbtest from '../usersdbtest';
import { Menu, MenuItem } from '@mui/material';

const InpBaseStyld = styled(InputBase)({
    fontFamily: "Outfit"
});

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

const AvatarStyles = styled(Avatar)({
    display: "flex",
});

const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const SearchBar = styled("div")({
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

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null); 
    const username = usersdbtest.username;

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBarStyled position="fixed" width="70px">
            <ToolbarStyled>
                <headerText>book.it</headerText>
                <SearchBar><InpBaseStyld placeholder="search..." /></SearchBar>
                <IconStyled>
                    <Text>User accounts coming soon!</Text>
                    <AvatarStyles onClick={handleMenuOpen}>U</AvatarStyles>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile settings</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Liked Books</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Hidden Books</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Reviews</MenuItem>
                    </Menu>
                </IconStyled>
            </ToolbarStyled>
        </AppBarStyled>
    )
}

export default NavBar;