import { Button, Paper, Typography} from '@material-ui/core';
import React from 'react'

import useStyles from "./style"

const Auth = ({handleSignIn}) => {


const classes = useStyles();

    return (
        <div className={classes.container} >
            <Paper className={classes.paper}>
            <img  
            src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Keep_icon_%282015-2020%29.svg/2048px-Google_Keep_icon_%282015-2020%29.svg.png"
             height= "100px" alt= "google-keep"
            />
            <Typography  gutterBottom variant= "h4" className={classes.title}>
                Google Keep 
            </Typography>
            <Button onClick={handleSignIn} variant= "contained" color="secondary">
            Login
            </Button>
            </Paper>
        </div>
    )
}

export default Auth;


