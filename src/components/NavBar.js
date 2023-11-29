import { styled, Box, AppBar, Toolbar, InputBase, Avatar } from '@mui/material';
import React from 'react';

const InpBaseStyld=styled(InputBase)({
    fontFamily: "Outfit"
});

const Text=styled(InputBase)({
    fontFamily: "Outfit",
    color: "#FDF6EA",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px" // Add left margin for distance
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

    return (
        <AppBarStyled position="static">
            <ToolbarStyled>
                <SearchBar><InpBaseStyld placeholder="search..."/></SearchBar>
                <IconStyled>
                    <AvatarStyles>P</AvatarStyles>
                    <Text placeholder = "Juan1234"/>
                </IconStyled>
            </ToolbarStyled>
        </AppBarStyled>
    )
}

export default NavBar;