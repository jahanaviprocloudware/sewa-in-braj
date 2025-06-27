import SendIcon from "@mui/icons-material/Send";
import { Avatar, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import imageFour from "../../../src/logos/ChatGPT Image Jun 20, 2025, 02_59_46 PM.png";
import { setActivetab, setLoading } from "../app/reducer/tabSlice";
// import {Peacock} from '../../Animation/peacock'
import "./Home.css";
import { KrishnaAnimation } from "../Animation/krishnaAnimation";
import { Peacock } from "../Animation/peacock";
export const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className={`container-fluid backgorund`}>
      <div>

      <KrishnaAnimation />
      </div>
      // <div>
      // <Peacock /> 
      // </div>
      <div className="col-12 d-flex flex-column vh-100 justify-content-center align-items-center">
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
            <h2 className="textColor">Vraha</h2>
          </div>
          <div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              className="backgorundbtnColor"
              onClick={() => {
                dispatch(setLoading(true));
                setTimeout(() => {
                  dispatch(setActivetab("ShoppingPage"));
                  dispatch(setLoading(false));
                }, 1000);
                
              }}
            >
              Lets Go!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
