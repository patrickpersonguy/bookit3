import React from 'react';
import { makeStyles } from '@mui/styles';

const bgStyles = makeStyles({ 
    bg: {
        width: "70%",
        height: "100vh",
        backgroundColor: "#554971",
    }
})

function AppView(){
    const background = bgStyles()

    return(
        <div className = {background.bg}>
            content
        </div>
    )
}

export default AppView;