import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../sewaInBraj/app/reducer/addToCart';
import { setSelectedData } from '../sewaInBraj/app/reducer/reducer';
import './CardWithBody.css';

export const CardWithBody = (props) => {

  const { id, img, price, description, description2, moreInfo, name,setDrawerOpen } = props;
  const [expanded, setExpanded] = React.useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = {
    id,
    img,
    price,
    description,
    description2,
    moreInfo,
    name
  };

  
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setDrawerOpen(true);
  };

  return (
    <div className="card card-uniform card-animated-border" key={id}>
     
      <div onClick={() => {
        dispatch(setSelectedData(props));
        navigate(`/product/${id}`);
        }}>
      <div className="card-header d-flex align-items-center">
        <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center me-2" style={{ width: 40, height: 40, fontSize: 20 }}>
          {name?.charAt(0).toUpperCase()}
        </div>
        <h5 className="mb-0">{name}</h5>
      </div>
      <img src={img[0]?.url || ''} className="card-img-top card-img-uniform" alt={name} />
      </div>
      <div className="card-body flex-grow-1">
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">Price: {price}</p>
      </div>
       <div className="p-2 d-flex justify-content-start cursor-pointer" onClick={handleAddToCart}>
                    <ShoppingCartIcon/> click to buy
                  </div>
      <div className="card-footer">
        <button
          className="btn btn-link p-0 cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
        {expanded && (
          <div className="mt-2">
            <div className="fw-bold mb-1">About:</div>
            <div>{description2}</div>
            <div>
              {typeof moreInfo === 'string'
                ? moreInfo.split(',').map((info, idx) => (
                    <div key={idx}>{info}</div>
                  ))
                : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
