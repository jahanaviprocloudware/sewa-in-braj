import { useSelector } from 'react-redux';
import Carousel from '../Crousel/Crousel';
import { setActivetab } from '../app/reducer/tabSlice';
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';


export const ProductInfo = () => {
  const dispatch = useDispatch();

        const {name,price,description,img,description2,moreInfo} = useSelector((state) => state.users.selectedData);
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center vh-100 mt-20">
                  <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0.5em 1em 0.2em 1em",
          zIndex: 2,
        }}
      >
        <button
          onClick={() => dispatch(setActivetab("ShoppingPage"))}
          aria-label="Close"
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "50%",
            width: "2.2em",
            height: "2.2em",
            fontSize: "1.5em",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <CloseIcon />
        </button>
      </div>
            <div>
              <Carousel images={img} />
            </div>
          <h1 className="text-center">{name}</h1>
          <p className="text-center">
           {description}
          </p>
          <p className="text-center">
           {description2}
          </p>
          <p className="text-center fw-bold">Price: {price}</p>
          <p className="text-center">{moreInfo}</p>
        </div>
      </div>
    </div>
  );
}