import React from "react";
import { Box, Button, Switch } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";

import house from  "../../assets/house.jpg";

import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";

function Discountpop({ setopenmainpop }) {
  const data = [
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
    { detail: "Bill Name Here", prix: 1000 },
  ];
  return (
    <Box className="Discountpopto">
      <Box
        className="pricehed"
        sx={{ height: "8%", width: "100%", borderBottom: "0" }}
      >
        <Box sx={{ fontWeight: "900" ,marginLeft:"15px" }}>Unit Details</Box>
        <Box sx={{ color: "#7C8594", display:'flex',alignItems:'center',marginRight:'15px'}} onClick={() => setopenmainpop(false)}>
          <CloseIcon />
        </Box>
      </Box>

      <Box className="wholediscount">
        <Box className="wholeleft">
          <Box className="wholeleftin">
            <Box className="imagecont">
              <Box className="imagecontin">
                <Box className="imageleft">
                  <img
                    src={house}
                    alt="no"
                    style={{
                      height: "100%",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                  />
                </Box>
                <Box className="imagertight">
  
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", height:'48%',gap:'7px' }}
                    >
                      <Box sx={{height:'100%', width:'50%'}}>
                        <img
                          src={house}
                          alt="no"
                          style={{
                            height: "100%",
                            borderRadius: "8px",
                            width: "100%",
                          }}
                        />
                      </Box>
                      <Box sx={{height:'100%', width:'50%'}}>
                        <img
                          src={house}
                          alt="no"
                          style={{
                            height: "100%",
                            borderRadius: "8px",
                            width: "100%",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", height:'48%',gap:'10px' }}
                    >
                      <Box sx={{height:'100%', width:'50%'}}>
                        <img
                          src={house}
                          alt="no"
                          style={{
                            height: "100%",
                            borderRadius: "8px",
                            width: "100%",
                          }}
                        />
                      </Box>
                      <Box sx={{height:'100%', width:'50%'}}>
                        <img
                          src={house}
                          alt="no"
                          style={{
                            height: "100%",
                            borderRadius: "8px",
                            width: "100%",
                          }}
                        />
                      </Box>
                    </Box>
          
                </Box>
              </Box>
            </Box>

            <Box className="imageconee">
              <Box className="imagedishe">
                <Box className="discoute">Jumeirah Estate</Box>
                <Box
                  sx={{
                    color: "white",
                    fontSize: "10px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:'#98A0AC',
               borderRadius:'5px',
              
                    paddingLeft:'5px',
                    paddingRight:'5px'
            
                  }}
                >
                  UNT-1234
                </Box>
              </Box>
              <Box sx={{ fontSize: "14px", color: "#4E5A6B" }}>
                Rubix Apartment, K Tower, Floor 1
              </Box>
              <Box>
                <Box
                  className="iconsanddot"
                  sx={{
                    width: "80%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box className="iconndnum" sx={{ width: "100%" ,gap:'7px' }}>
                    <Box className="aligences">
                      <HotelOutlinedIcon sx={{color:'#CED3DD', fontSize:'20px'}}/>
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2
                    </Box>
                    <Box className="dot"></Box>

                    <Box className="aligences">
                    <BathtubOutlinedIcon sx={{color:'#CED3DD', fontSize:'20px'}}/>

                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2
                    </Box>
                    <Box className="dot"></Box>

                    <Box className="aligences">
                      <HomeOutlinedIcon sx={{color:'#CED3DD', fontSize:'20px'}}/>
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2BHK
                    </Box>
                    <Box className="dot"></Box>

                    <Box className="aligences">
                      <HotelOutlinedIcon sx={{color:'#CED3DD', fontSize:'20px'}} />
                    </Box>
                    <Box
                      className="aligences"
                      sx={{ color: "#4E5A6B", fontWeight: "600" }}
                    >
                      2000 sq.ft
                    </Box>
                  </Box>
                  
                </Box>
              </Box>
            </Box>

            <Box className="handbodone">
              <Box sx={{ color: "#091B29" }}>
                <LibraryBooksIcon sx={{ fontSize: "16px",marginRight:'10px' }} />
                Handbook
              </Box>
              <Box sx={{ color: "#5078E1", cursor:'pointer' }}>View / Download</Box>
            </Box>
          </Box>
        </Box>
        <Box className="wholeright">
          <Box className="wholerightin" sx={{height:'100%'}}>
            <Box className="wholerighed">UNIT PRICE DETAIL</Box>

            <Box className="removecomitem">
              <Box className="scrolremcon">
                {data.map((item, index) => (
                  <Box
                    className="removitdiv"
                    key={index}
                    sx={{ minHeight: "10%", flexDirection: "column" }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        height: "50%",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ fontWeight: "600", fontSize: "14px" }}>
                        {item.detail}
                      </Box>
                      <Box className="remoddelico">
                        <Box>${item.prix}</Box>
                      </Box>
                    </Box>

                    <Box
                      style={{
                        display: "flex",
                        height: "50%",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        style={{
                          color: "#98A0AC",
                          fontSize: "14px",
                          fontWeight: "normal",
                        }}
                      >
                        Discount
                      </Box>
                      <Box className="discdrop" sx={{color:'#98A0AC', fontSize:'12px'}}>
                        10%
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>


              <Box className="removefinal">
                <Box>Final Total</Box>
                <Box>$1,200</Box>
              </Box>
            </Box>
          </Box>
         
        </Box>
      </Box>
    </Box>
  );
}

export default Discountpop;
