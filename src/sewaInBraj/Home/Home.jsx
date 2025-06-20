import { useSelector } from "react-redux";
import { Button, Avatar, Link } from "@mui/material";
import imageOne from "../../../src/logos/FreeImageKit_IMG_Resized_to_(1024x1024).png";
import imagetwo from "../../../src/logos/FreeImageKit_IMG_Resized_to_(1024x1024) (1).png";
import imageThree from "../../../src/logos/ChatGPT Image Jun 20, 2025, 03_58_54 PM.png";
import imageFour from "../../../src/logos/ChatGPT Image Jun 20, 2025, 02_59_46 PM.png";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./Home.css";

export const Home = () => {
  const [isChange, setIschange] = useState(false);
  const [isLogoChange, setIsLogoChange] = useState(imageOne);
  const [backgroundColor, setBackgroundColor] = useState("1");
  const [isColorChange, setIsColorChange] = useState(false);
  console.log("isLogoChange1>>>", isLogoChange);
  const logoPath = [imageOne, imagetwo, imageThree, imageFour];
  const { name } = useSelector((state) => state.users);
  console.log("name>>>>", name);
  return (
    <div className={`container-fluid ${backgroundColor == '1' ? 'backgorund' : backgroundColor == '2' ? 'backgorund2' : backgroundColor == '3' ? 'backgorund3' : 'backgorund4'} `}>
    <div>
    #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setBackgroundColor('1');
        }}
      >
        change background color 1
      </Link>
      </div>
      <div>
      #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setBackgroundColor('2');
        }}
      >
        change background color 2
      </Link>
      </div>
      <div>
      #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setBackgroundColor('3');
        }}
      >
        change background color 3
      </Link>
      </div>
      <div>
      #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setBackgroundColor('4');
        }}
      >
        click to change background color 4
      </Link>
      </div>
      <div>
      #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setIsColorChange(!isColorChange);
        }}
      >
        change text color
      </Link>
      </div>
      <div>
      #{" "}
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          setIschange(!isChange);
        }}
      >
        click to chnage name
      </Link>
      </div>
      {logoPath.map((logo, index) => (
        <div key={index}>
          #{" "}
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setIsLogoChange(logo);
            }}
          >
            click to change logo {index + 1}
          </Link>
        </div>
      ))}
      <div className="col-12 d-flex flex-column vh-100 justify-content-center align-items-center">
        <div>
          <h1 className={`${isColorChange ? "headingColor" : 'textColor2'}`}>Vrindavan Market</h1>
        </div>
        <div className="d-flex align-items-end gap">
          <div className="headingColor">
            {console.log("pathe>>>", isLogoChange)}
            <Avatar
              alt="Vrindavan Market"
              src={isLogoChange}
              sx={{ width: 65, height: 65 }}
            />
          </div>
          <div>
            <h2 className={isColorChange ? 'textColor' : 'textColor2'}>{`${
              isChange
                ? "Karva (kar-hands+va-varindavan)"
                : "Vraha (vra-vrindavan+ha-hoot[market])"
            }`}</h2>
          </div>
          <div>
            {/* Vraha vrindavan hoot[market] */}
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className={`${isColorChange ? "backgorundbtnColor" : 'backgorundbtnColor2'}`}
              onClick={() => {}}
            >
              Lets Go!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
