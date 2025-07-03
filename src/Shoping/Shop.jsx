import { useSelector } from "react-redux";
import "./Shop.css";
import { useEffect, useState } from "react";
import { CardWithBody } from "./../Card/CardWithBody.tsx";
import { DrawerComponent } from "../sewaInBraj/Drawer/Drawer.jsx";
import { Box, Typography } from "@mui/material";

export const Shop = () => {
  const { data = [] } = useSelector((state) => state.users);
 const { itemsearch } = useSelector((state) => state.activeTabs);
  const [cardData, setCardData] = useState(data);
  const [drawerOpen, setDrawerOpen] = useState(false);

useEffect(() => {
    if (itemsearch?.length > 0) {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(itemsearch.toLowerCase())
      );
      setCardData(filteredData);
    } else {
      setCardData(data);
    }
  }, [itemsearch, data]);
  return (
    <div className="shop-animated-bg container-fluid">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
          <h3 className="p-1 shop-heading"> Browse beautiful handmade items made with love in Vrindavan ❤️</h3>
      </Typography>

      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>

      <Box className="card-top-ticker-card mb-4">
        <Box className="ticker-wrapper">
          <Box className="ticker-text">
            🚚 Shipping charges may apply based on your city and state. Delivery
            times and fees vary. Thank you for choosing us!
          </Box>
          <Box className="ticker-text">
            🚚 Shipping charges may apply based on your city and state. Delivery
            times and fees vary. Thank you for choosing us!
          </Box>
        </Box>
      </Box>

      <div className="d-flex flex-sm-row justify-content-around flex-wrap card-seq">
        {cardData.length > 0 ? (
          cardData.map((item) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={item.id}
            >
              <div className="card-3d">
                <CardWithBody {...item} setDrawerOpen={setDrawerOpen} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100 mt-4">
            No products found for "{itemsearch}"
          </p>
        )}
      </div>

      <DrawerComponent drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
};
