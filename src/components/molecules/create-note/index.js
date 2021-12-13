import {
    Button,
    Collapse,
    IconButton,
    InputBase,
    Paper,
  } from "@material-ui/core";
  import React, { useState } from "react";
  import useStyles from "./style";

  import{
    PaletteOutlined,
    NotificationsNoneOutlined,
    ContactsOutlined,
    ImageOutlined,
    ArchiveOutlined,
    MoreVertOutlined,
    UndoOutlined,
    RedoOutlined,
    
  } from "@material-ui/icons";

  const CreateNote = ({ setNotes, createNote }) => {

  const classes = useStyles();

  const [ InputData, setInputData] = useState({

    title: "",
    content: "",
  });

  const actionIcons = [
    {name: "Palette", Icon: PaletteOutlined, 
    onClick: () => {}, 
  },

    {name: "Notifi", Icon: NotificationsNoneOutlined, onClick: null},
    {name: "Contact", Icon: ContactsOutlined, onClick: null},
    {name: "Image", Icon: ImageOutlined, onClick: null},
    {name: "Archive", Icon: ArchiveOutlined, onClick: null},
    {name: "More", Icon: MoreVertOutlined, onClick: null},
    {name: "undo", Icon: UndoOutlined, onClick: null},
    {name: "Redo", Icon: RedoOutlined, onClick: null},
 
];


const onSubmit = () => {
  console.log(InputData);
  let createdAt = new Date();
  createdAt = createdAt.toLocaleDateString();
  let note = {
    title: InputData.title,
    content: InputData.content,
    createdAt: createdAt,
  }
  createNote(note);
  setInputData({
    title: "",
    content: "",

  });
};

const handleChange = (e) => {
  const { name, value} = e.target;
  console.log(name, value);
  setInputData((prevInput) => ({
    ...prevInput,
    [name]: value,
  }));
};
  
  const [isExpanded, setIsExpanded] = useState(false);

   return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <InputBase
            className={classes.input}
            placeholder="Title..."
            onFocus={() => setIsExpanded(true)}
            onChange={handleChange}
            name= "title"
            value= { InputData.title }

          />
  
          <Collapse in={isExpanded}>
            <InputBase
              onChange={handleChange}
              multiline
              maxRows={5}
              minRows={3}
              className={classes.input}
            placeholder="Take a Note...."
            name="content"
          />
          

          <div className={classes.bottonAction}>
            <div className={classes.icons}>
              {actionIcons.map(({ Icon, onClick} , index) => (
              <IconButton 
              key= {index}
              size="small"
              aria-label="menu"
              onClick={onClick}
              className={classes.icon}
              >
            
              <Icon fontSize="small" />
             </IconButton>
              ))}
            </div>
            <Button onClick={onSubmit}>Save</Button>
          </div>

        </Collapse>
      </Paper>
      </div>
     
    
    
  );
};

export default CreateNote;

  