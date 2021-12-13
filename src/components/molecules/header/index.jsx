import React, { useState } from "react";

import { AppBar, Toolbar, Typography, Avatar, InputBase } from '@material-ui/core';

import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';

import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';

import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';

import SearchIcon from '@material-ui/icons/Search';

import Paper from '@material-ui/core/Paper';

import useStyles from './style';

import { IconButton } from '@material-ui/core';

import logo from './images/keep.png';

import Tooltip from '@material-ui/core/Tooltip';



const Header = ({ selectedSidebar, filterNotes , currentUser }) => {

    const classes = useStyles();



    const icons = [
        RefreshOutlinedIcon,
        DnsOutlinedIcon, 
        SettingsOutlinedIcon,
        AppsOutlinedIcon,
    ];

    const [ search, setSearch] = useState("");

    
    const onClick = () => {
        filterNotes(search);
    };

    


    return ( <AppBar position="fixed" className={classes.container}>
           <Toolbar className={classes.toolbar}>

            <div className={classes.leftSection}>

            <IconButton>
            <MenuOpenOutlinedIcon className={classes.icon}/>
            </IconButton>

            <div className="header">
                <img src={logo} alt="logo" width="40" height="40" />
            </div>

            <Typography 
            color="textSecondary"
            className={classes.title} >
             { selectedSidebar || "Keep"}
            </Typography>

            </div>

            
            <Paper className={classes.middleSection}>
         
            <IconButton onClick= {onClick} size="small" className={classes.icon}>
            <SearchIcon  fontSize="small"/>
            </IconButton>

             <InputBase
            value={search} onChange={(e) =>
           setSearch(e.target.value)}
           className={classes.input}
           placeholder="Search Note....."
           
            />
            </Paper>


            <div className={classes.rightSection}>
            {
                icons.map((Icon) => (

                  <IconButton>
                  <Icon className={classes.icon}/>
                  </IconButton>  
            ))}

            <Tooltip title={currentUser.displayName}> 
           <Avatar 
           alt = {currentUser.displayName}
           src= {currentUser.photoURL}
           
           />
           </Tooltip>

        </div>
        </Toolbar>
    </AppBar>

        
    );  
};

export default Header
