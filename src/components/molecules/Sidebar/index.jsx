import React, { useState } from "react";
import SideBarItem from "../../atoms/sidebar-item";
import useStyles from "./style";

import {
  EmojiObjectsOutlined,
  NotificationImportantOutlined,
  EditOutlined,
  ArchiveOutlined,
  DeleteOutlineOutlined,
} from "@material-ui/icons";

const initialState = [
  { id: "1", isActive: true, Icon: EmojiObjectsOutlined, text: "Notes" },
  {
    id: "2",
    isActive: false,
    Icon: NotificationImportantOutlined,
    text: "Reminders",
  },
  { id: "3", isActive: false, Icon: EditOutlined, text: " Edit Label" },
  { id: "4", isActive: false, Icon: ArchiveOutlined, text: "Archive" },
  { id: "5", isActive: false, Icon: DeleteOutlineOutlined, text: "Trash" },
];

const Sidebar = ({ setSelectedSidebar }) => {
  const classes = useStyles();
  const [sidebarItems, setsidebarItems] = useState(initialState);

  const selectSidebarItem = (item) => {
    const newState = sidebarItems.map((obj) =>
      obj.id === item.id
        ? { ...obj, isActive: true }
        : { ...obj, isActive: false }
    );
    setsidebarItems(newState);
    setSelectedSidebar(item.text);
  };

  return (
    <div className={classes.container}>
      {sidebarItems.map((item) => (
        <SideBarItem
          key={item.id}
          onClick={() => selectSidebarItem(item)}
          text={item.text}
          icon={item.Icon}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Sidebar;
