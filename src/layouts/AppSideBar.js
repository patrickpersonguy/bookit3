import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Stack, Divider } from '@mui/material';
import CustomizedAccordions from '../components/Accordion';
import './bg1.png';

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

    return (
        <Box className={classes.sidebar} flexGrow={1} width={"20%"} height={"100vh"} position="fixed" overflow="auto">
            <h2 className={classes.textheader}>book.it</h2>
            <br/>
            <br/>
            <Stack    
                direction="column"
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}>
                <CustomizedAccordions/>
                <p className={classes.text}>
                    There's no such thing
                    as too many books!
                </p>
                <div style={{
                    backgroundImage: 'bg1.png'}}
                />
            </Stack>
        </Box>
    );
}

export default AppSideBar;