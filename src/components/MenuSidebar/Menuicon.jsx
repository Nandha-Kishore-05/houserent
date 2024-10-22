import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Divider from '@mui/material/Divider';
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";

import React from "react";
import '../../styles/Threepage.css'
import { useState } from "react";
import Pricingpop from "../Popup/PricingPopup/Pricingpop";

import { Box } from "@mui/material";


export default function Menuicon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPricingDialog, setOpenPricingDialog] = useState(false);


  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenPricingDialog = () => {
    setOpenPricingDialog(true);
    handleClose(); // Close the menu
  };

  const handleClosePricingDialog = () => {
    setOpenPricingDialog(false);
  };


 



  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="small"
        sx={{
          border: "none",
          boxShadow: "none",
          fontWeight: "600",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        <AddIcon /> Customize
      </Button>
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
     
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleOpenPricingDialog}>
        Add Pricing Component
      </MenuItem>
      <Divider sx={{width:'100%', marginLeft:'50px'}} />

      <MenuItem >
        Add Ammunities
      </MenuItem>
      
      <Divider sx={{width:'100%', marginLeft:'50px'}} />

      <MenuItem >
        Add Utilities
      </MenuItem>
      <Divider sx={{width:'100%', marginLeft:'50px'}} />
      
      <MenuItem >
        Add Discount
      </MenuItem>
      <Divider sx={{width:'100%', marginLeft:'50px'}} />
      <MenuItem >
        Remove Component
      </MenuItem>
    </Menu>
      <Dialog
        open={openPricingDialog}
        onClose={handleClosePricingDialog}
        PaperProps={{
          style: { height: "550px", width: "500px" },
        }}
      >
        <Pricingpop
          openPricingDialog={openPricingDialog}
          setOpenPricingDialog={setOpenPricingDialog}
        />
      </Dialog>

    

     
    </Box>
  );
}
