import { makeStyles } from "@material-ui/core/styles";
import {  deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: "#fff",
    },
    toolbar: {
        display: 'grid',
        gridTemplateColumns: "200px auto max-content",
    },

    icon: {
        color: "gray",
    },
   
    leftSection: {
        display: 'flex',
        alignItems:' center',
    },

    rightSection:
    {
       display: "flex",
       alignItems: "center", 
    },
    middleSection:
    {
        display: "flex",
        alignItems: "center",
        maxWidth: "60%",
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
    

}));

export default useStyles;