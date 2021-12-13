import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => (
    {
        container: {

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",

        },
        toolbar: {},


        paper: {
            width: "300px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },


    }));
export default useStyles;