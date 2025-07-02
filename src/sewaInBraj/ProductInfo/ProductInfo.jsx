import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CarouselComponent from "./../Crousel/Crousel";
import { Button, Typography, Divider, Box, Fade, Paper } from "@mui/material";
import { DrawerComponent } from "../Drawer/Drawer";
import { addToCart } from "../app/reducer/addToCart";
import "./ProductInfo.css";

export const ProductInfo = () => {
  const { id: paramId } = useParams();
  const selectedData = useSelector((state) => state.users.selectedData);
  const allData = useSelector((state) => state.users.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const footer = location.state?.footer === true
  
  const [product, setProduct] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (footer && paramId && allData.length > 0) {
      const found = allData.find((item) => String(item.id) === paramId);
      setProduct(found || null);
    } else if (!selectedData && paramId && allData.length > 0) {
      const found = allData.find((item) => String(item.id) === paramId);
      setProduct(found || null);
    } else {
      setProduct(selectedData);
    }
  }, [footer, selectedData, paramId, allData]);

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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setDrawerOpen(true);
  };

  const handleClose = () => {
     navigate(-1);
  };

  if (!product) {
    return (
      <div className="text-center mt-5 fade-in">
        <Typography variant="h6">Product not found</Typography>
        <Button variant="outlined" onClick={() => navigate("/shop")} sx={{ mt: 2 }}>
          Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-12 d-flex flex-column align-items-center">

          <div className="w-100 d-flex justify-content-end mb-3">
            <Button
              onClick={handleClose}
              variant="outlined"
              sx={{
                borderRadius: "50%",
                minWidth: "2.5rem",
                height: "2.5rem",
                padding: 0,
                backgroundColor: "white",
              }}
              className="shadow-sm"
            >
              <CloseIcon />
            </Button>
          </div>

          <div className="ticker-text-crousel mb-3 shadow-sm rounded-pill px-2 py-1">
            <span>
              🚚 Shipping charges may apply based on your city and state. Delivery
              times and fees vary. Thank you for choosing us!
            </span>
          </div>

          <Typography
            variant="body2"
            className="text-center text-muted mb-4"
            sx={{ fontStyle: "italic", fontSize: "0.9rem" }}
          >
            *If the price shown in the image is different, please attach a screenshot when submitting your order.
          </Typography>

          <Fade in={true} timeout={600}>
            <Paper
              elevation={3}
              className="carousel-box p-3 mb-4 zoom-in w-100"
              style={{ maxWidth: "600px" }}
            >
              <div className="w-100">
                <CarouselComponent images={validImages} CardId={id} />
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <Button variant="contained" color="success" size="large" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </Paper>
          </Fade>

          <Box className="text-center px-3 w-100 info-card shadow-sm rounded p-4 glassy" style={{ maxWidth: "750px" }}>
            <Typography variant="h4" gutterBottom className="title-glow">{name}</Typography>
            <Typography variant="body1" className="mb-2">{description}</Typography>
            <Typography variant="body2" className="mb-3 text-muted">{description2}</Typography>
            <Typography variant="h6" color="primary" className="fw-bold mb-3 price-pop">
              Price: {price}
            </Typography>
            <Divider className="my-3" />
            {typeof moreInfo === "string" &&
              moreInfo.split(",").map((info, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary" className="mb-1">
                  • {info.trim()}
                </Typography>
              ))}
          </Box>
        </div>
      </div>

      <DrawerComponent drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </div>
  );
};
