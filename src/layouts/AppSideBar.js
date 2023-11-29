import React from 'react';
import { makeStyles, styled } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({ 
    sidebar: {
        backgroundColor: "#202B32",
    }
})

const headertextStyle = makeStyles({
    textheader: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "25px",
        padding: "20px"
    }
})

const bodytextStyle = makeStyles({
    text: {
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "25px",
        padding: "20px"
    }
})


function AppSideBar(){
    const bar = useStyles()
    const header = headertextStyle()
    const body = bodytextStyle()
    const SideButton = styled(Button)({
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "22px", 
        fontWeight: "bold", 
        "&:hover":{
            backgroundColor: "#27353D",
        },
        paddingLeft: "20px" 
    })

    const LinkStyles = styled(Link)({
        color: "#FDF6EA",
        fontFamily: "Outfit",
        fontSize: "22px", 
        fontWeight: "bold", 
        "&:hover":{
            backgroundColor: "#27353D",
        },
        paddingLeft: "20px" 
    })


    return(
        <Box className = {bar.sidebar} flex={1} height={"100vh"} position="sticky">
            <h2 className = {header.textheader}>book.it</h2>
            <p className = {body.text}>
            There's no such thing
            as too many books!
            </p>

            <Stack spacing={0.1} direction="column">
                <LinkStyles to="/a">
                    <SideButton>about us</SideButton>
                </LinkStyles>
                <LinkStyles to="/faq">
                    <SideButton>faq</SideButton>
                </LinkStyles>
                <LinkStyles to="/contact">
                    <SideButton>contact us</SideButton>
                </LinkStyles>
            </Stack>
        </Box>
    );
};

export default AppSideBar;