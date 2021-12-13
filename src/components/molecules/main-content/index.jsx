import { Container, Divider, Grid } from "@material-ui/core";
import React from "react";
import CustomCard from "../../atoms/custom-cards";
import useStyles from "./style";
// import { notes } from "../../../data";
import CreateNote from "../create-note";


const MainContent = ({ notes, setNotes, createNote, deleteNote}) => {

  const classes = useStyles();

  // const getNotes =  () => {

  //   const notesRef = collection( db, "notes");
  //   getDocs(notesRef).then(function(response){

  // }).catch(function(error){

  // });

  // };

  
  return (
    <Container className={classes.container}>
      <CreateNote createNote={createNote}  setNotes={ setNotes } />
      <br />
      <Divider />
      <br />

      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <CustomCard
            id={0}
            title={"Default Title"}
            body={"This is a body of defult card"}
            createdAt={"10/13/2022"}
          />
        </Grid> */}
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
            <CustomCard
            deleteNote={deleteNote}
             setNotes={setNotes}
              id={note.id}
              title={note.title}
              content={note.content}
              createdAt={note.createdAt}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainContent;
