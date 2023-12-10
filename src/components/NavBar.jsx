import React, { useState } from 'react';
import { styled, Box, AppBar, Toolbar, InputBase, Avatar, Typography } from '@mui/material';

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

const NavBar= ({ onSearch }) =>{
    const [searchInput, setSearchInput] = useState("")
    
    const handleSearch = (value)=> {
        setSearchInput(value);
        onSearch(value);
    };

    return (
        <AppBarStyled position="fixed" width="70px">
            <ToolbarStyled>
                <headerText>book.it</headerText>
                <SearchBar>
                    <InpBaseStyld placeholder="search for a book..." value={searchInput} onChange={(e) => handleSearch(e.target.value)} />
                </SearchBar>
                <IconStyled>
                    <Text>User accounts coming soon!</Text>
                </IconStyled>
            </ToolbarStyled>
        </AppBarStyled>
    )
}

export default NavBar;