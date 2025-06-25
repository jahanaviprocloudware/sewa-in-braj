import { useDispatch, useSelector } from "react-redux";
import { Button, Avatar, Link } from "@mui/material";
import imageOne from "../../../src/logos/FreeImageKit_IMG_Resized_to_(1024x1024).png";
import imagetwo from "../../../src/logos/FreeImageKit_IMG_Resized_to_(1024x1024) (1).png";
import imageThree from "../../../src/logos/ChatGPT Image Jun 20, 2025, 03_58_54 PM.png";
import imageFour from "../../../src/logos/ChatGPT Image Jun 20, 2025, 02_59_46 PM.png";
import React, { useState } from "react";
import logo from "../../../src/logos/background-scen.svg";
import SendIcon from "@mui/icons-material/Send";
import "./Home.css";
import { setActivetab } from "../app/reducer/tabSlice";

export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className={`container-fluid backgorund`}>
      {/* <div>
        <img src={logo} alt="Logo" style={{display: 'block', margin: '0 auto' }} />
      </div> */}
  
      <div className="col-12 d-flex flex-column vh-100 justify-content-center align-items-center">
        {/* <div>
          <h1 className="headingColor">Vrindavan Market</h1>
        </div> */}
        <div className="d-flex align-items-end gap">
          <div className="headingColor">
            <Avatar
              alt="Vrindavan Market"
              src={imageFour}
              sx={{ width: 65, height: 65 }}
            />
          </div>
          <div>
          <h1 className="headingColor">Vrindavan Market</h1>
            <h2 className='textColor'>Vraha</h2>
          </div>
          <div>
            {/* Vraha vrindavan hoot[market] */}
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="backgorundbtnColor"
              onClick={() => {dispatch(setActivetab('ShoppingPage'))}}
            >
              Lets Go!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
