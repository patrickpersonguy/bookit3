import React from 'react';
import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const buttonStyles = makeStyles({
    butt: {
        color: "#36213E",
        fontFamily: "Outfit",
        fontSize: "22px"
    }
})

const useStyles = makeStyles({ 
    sidebar: {
        width: "30%",
        height: "100vh",
        backgroundColor: "#fdca40",
    }
})

const headertextStyle = makeStyles({
    textheader: {
        color: "#36213E",
        fontFamily: "Outfit",
        fontSize: "25px",
        padding: "20px"
    }
})

const bodytextStyle = makeStyles({
    text: {
        color: "#36213E",
        fontFamily: "Outfit",
        fontSize: "30px",
        padding: "20px"
    }
})

function AppSideBar(){
    const bar = useStyles()
    const header = headertextStyle()
    const body = bodytextStyle()
    const btn = buttonStyles()

    return(
        <div className = {bar.sidebar}>
            <h2 className = {header.textheader}>book.it</h2>
            <p className = {body.text}>
            There's no such thing
            as too many books!
            </p>

            <Stack spacing={0.1} direction="column" className = {btn.butt}>
                <Button variant = "text">about us</Button>
                <Button variant = "text">faq</Button>
                <Button variant = "text">contact us</Button>
            </Stack>
        </div>
    );
};

export default AppSideBar;