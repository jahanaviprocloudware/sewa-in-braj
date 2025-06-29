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

export const DrawerComponent = ({ drawerOpen, setDrawerOpen }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const message = `Hello, I'm interested in the following products:\n${cartItems
  .map((item, index) => `${index + 1}. ${item.name}`)
  .join("\n")}`;

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
                <ListItemAvatar>
                  <Avatar
                    src={item.img[0]?.url || item.img[0] || ""}
                    alt={item.name}
                    variant="rounded"
                  />
                </ListItemAvatar>
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
      <div className="drawer-bottom-actions">
        <a
          href={`https://api.whatsapp.com/send?phone=918923720937&text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <Button
            className="animated-btn"
            variant="contained"
            color="primary"
            fullWidth
          >
            Click to buy
          </Button>
        </a>
      </div>
    </Drawer>
  );
};
