import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CarouselComponent from "./../Crousel/Crousel";
// import { addToCart } from "../app/reducer/cartSlice";
import "./ProductInfo.css";
import { Button } from "@mui/material";
import { DrawerComponent } from "../Drawer/Drawer";
import { addToCart } from "../app/reducer/addToCart";

export const ProductInfo = () => {
  const { id: paramId } = useParams();
  const selectedData = useSelector((state) => state.users.selectedData);
  const allData = useSelector((state) => state.users.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(selectedData);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!selectedData && paramId && allData.length > 0) {
      const found = allData.find((item) => String(item.id) === paramId);
      setProduct(found || null);
    } else {
      setProduct(selectedData);
    }
  }, [selectedData, paramId, allData]);

  const { name, price, description, img, description2, moreInfo, id } =
    product || {};

  const validImages = useMemo(() => {
    return Array.isArray(img)
      ? img.filter(
          (image) =>
            typeof image === "string" ||
            (image && typeof image.url === "string")
        )
      : [];
  }, [img]);

  if (!product) {
    return (
      <div className="text-center mt-5">
        No product selected or product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setDrawerOpen(true);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-12 d-flex flex-column justify-content-center align-items-center p-3"
          style={{ minHeight: "100vh" }}
        >
          {/* Close Button */}
          <div
            className="w-100 d-flex justify-content-end mb-3"
            style={{ maxWidth: "900px" }}
          >
            <button
              onClick={() => navigate(`/shop`)}
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

          {/* Ticker */}
          <div className="ticker-text-crousel">
            <span>
              Shipping charges may apply based on your city and state. Delivery
              times and fees vary. Thank you for choosing us!
            </span>
          </div>

          {/* Carousel */}
          <div className="mb-4 position-relative" style={{ maxWidth: "600px", width: "100%" }}>
            <CarouselComponent images={validImages} CardId={id} />
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="contained"
                color="success"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <h1 className="text-center">{name}</h1>
          <p className="text-center">{description}</p>
          <p className="text-center">{description2}</p>
          <p className="text-center fw-bold">Price: {price}</p>
          <div>
            {typeof moreInfo === "string"
              ? moreInfo
                  .split(",")
                  .map((info, idx) => <div key={idx}>{info}</div>)
              : null}
          </div>

        
        </div>
      </div>
              <div className="cursor-pointer">
        <DrawerComponent drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
</div>
    </div>
    
  );
};
