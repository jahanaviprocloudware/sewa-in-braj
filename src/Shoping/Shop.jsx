import { useSelector } from "react-redux";
import "./Shop.css";
import { useEffect, useState } from "react";
import { CardWithBody } from "./../Card/CardWithBody.tsx";
import { DrawerComponent } from "../sewaInBraj/Drawer/Drawer.jsx";

export const Shop = () => {
  const { data } = useSelector((state) => state.users);
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
    <div className="container-fluid">
      <h1>Shop</h1>
      <p>Welcome to the Shop section!</p>
      <div className="card-top-ticker-card">
        <div className="ticker-text">
          Shipping charges may apply based on your city and state. Delivery
          times and fees vary. Thank you for choosing us!
        </div>
      </div>
      <div className="d-flex flex-sm-row justify-content-around flex-wrap card-seq">
        {cardData.length > 0 ? (
          cardData.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={index}
            >
              <CardWithBody {...item} setDrawerOpen={setDrawerOpen}/>
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
