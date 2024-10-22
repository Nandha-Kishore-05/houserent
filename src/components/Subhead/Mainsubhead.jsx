import React from "react";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Mainsubhead() {
  return (
    <Box className="mainsub">
      <Box className="indsub" >
        Add Contact <ArrowForwardIosIcon style={{ fontSize: "14px" }} /> Lead
        Details <ArrowForwardIosIcon style={{ fontSize: "14px" }} /> Preview and
        Create Lead <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
        Quotation Details <ArrowForwardIosIcon style={{ fontSize: "14px" }} />
        <span style={{backgroundColor:'white',width:'40px',display:'flex',justifyContent:'center',height:'40px',alignItems:'center',borderRadius:'60px'}}>
       <span style={{backgroundColor:'blue',width:'20px',color:'white',padding:'2px',borderRadius:'60px',display:'flex',justifyContent:'center',fontSize:'14px'}}>4</span></span>   Preview and Create
      </Box>
    </Box>
  );
}

export default Mainsubhead;
