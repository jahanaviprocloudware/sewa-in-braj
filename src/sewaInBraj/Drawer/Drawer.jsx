import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove, Delete } from "@mui/icons-material";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../app/reducer/addToCart";
import CloseIcon from "@mui/icons-material/Close";
import "./Drawer.css";
import { useNavigate } from "react-router-dom";

export const DrawerComponent = ({ drawerOpen, setDrawerOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const extractPrice = (price) => {
  const match = typeof price === "string" && price.match(/\d+(?:\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

  const totalPrice = cartItems.reduce(
  (sum, item) => sum + extractPrice(item.price) * item.quantity,
  0
);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppClick = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate('/shippingAdress');
};

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{ sx: { width: "70%" } }}
    >
      <div className="p-3 cart-drawer-content drawer-flex-col">
        <div className="text-end">
          <button
            className="btn btn-sm btn-outline-secondary animated-close"
            onClick={() => setDrawerOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <h5 className="mt-3">
          Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h5>

        {cartItems.length === 0 ? (
          <p className="text-muted">No items in the cart</p>
        ) : (
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                className="d-flex justify-content-between align-items-start cart-item-appear"
              >
                <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${item.id}`,{state:{ footer: true }})}
              >
                <ListItemAvatar>
                  <Avatar
                    src={item.img[0]?.url || item.img[0] || ""}
                    alt={item.name}
                    variant="rounded"
                  />
                </ListItemAvatar>
                </span>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography variant="body2" className="text-muted">
                        Price: ₹{item.price}
                      </Typography>
                      <div className="d-flex align-items-center mt-1">
                        <IconButton
                          size="small"
                          onClick={() => handleDecrement(item.id)}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <span className="mx-2">{item.quantity}</span>
                        <IconButton
                          size="small"
                          onClick={() => handleIncrement(item.id)}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleRemove(item.id)}
                          className="ms-2"
                        >
                          <Delete fontSize="small" color="error" />
                        </IconButton>
                      </div>
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </div>
      <div className="text-end mt-3 me-3 fw-bold">
  Total: ₹{totalPrice.toFixed(2)}
</div>
      <div className="drawer-bottom-actions">
          <Button
            className="animated-btn"
            variant="contained"
            onClick={handleWhatsAppClick}
            color="primary"
            disabled={cartItems.length === 0}
            fullWidth
          >
            Click to buy
          </Button>
      </div>
    </Drawer>
  );
};
