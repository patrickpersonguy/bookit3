import React, { useState } from 'react';
import { styled, Box, AppBar, Toolbar, InputBase, Avatar } from '@mui/material';
import usersdbtest from '../usersdbtest';
import { Menu, MenuItem } from '@mui/material';

const InpBaseStyld = styled(InputBase)({
    fontFamily: "Outfit"
});

const Text = styled(InputBase)({
    fontFamily: "Outfit",
    color: "#FDF6EA",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px"
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

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget); 
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBarStyled position="sticky" width="70px">
            <ToolbarStyled>
                <SearchBar><InpBaseStyld placeholder="search..." /></SearchBar>
                <IconStyled>
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