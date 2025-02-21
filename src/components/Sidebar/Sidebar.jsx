import React, { useState } from "react";
import { Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "../../styles/Sidebar.css";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupsIcon from "@mui/icons-material/Groups";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SidebarIcon from "./SidebarIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FolderIcon from "@mui/icons-material/Folder";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1); 

  const icons = [
    <DashboardIcon style={{ fontSize: "18px" }} />,
    <GroupsIcon style={{ fontSize: "18px" }} />,
    <PersonIcon style={{ fontSize: "18px" }} />,
    <ApartmentIcon style={{ fontSize: "18px" }} />,
    <LocalOfferIcon style={{ fontSize: "18px" }} />,
    <SettingsIcon style={{ fontSize: "18px" }} />,
    <CloudDoneIcon style={{ fontSize: "18px" }} />,
    <ReceiptLongIcon style={{ fontSize: "18px" }} />,
    <FolderIcon style={{ fontSize: "18px" }} />,
    <ChatIcon style={{ fontSize: "18px" }} />,
  ];

  return (
    <Box className="Sidebarcont">
      <Box className="sidebari" style={{ height: "7%", alignItems: "end" }}>
        <SidebarIcon
          icon={<ArrowForwardIosIcon style={{ fontSize: "16px" ,backgroundColor:'#5078e1',height:'18px',width:'18px',borderRadius:'30px',padding:'8px' }} />}
        />
      </Box>

      <Box className="sidebari">
        <Box
          style={{
            width: "50%",
            border: "0.1px solid grey",
            backgroundColor: "#98A0AC",
          }}
        ></Box>
      </Box>
      {icons.map((icon, index) => (
        <Box className="sidebari" key={index}>
          <SidebarIcon
            icon={icon}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        </Box>
      ))}
    </Box>
  );
}

export default Sidebar;
