import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Shop } from "../../Shoping/Shop";
import { KrishnaAnimation } from "../Animation/krishnaAnimation";
import { Home } from "../Home/Home";
import NavigationBar from "../Navigation/Navigations";
import { ProductInfo } from "../ProductInfo/ProductInfo";
import { Footer } from "../Footer/Footer";
import AboutUs from "../about/About";
import { useRef } from "react";

export const NavigatedPages = () => {
  const { loading } = useSelector((state) => state.activeTabs);
  const location = useLocation();

  const showNavbarPaths = ["/shop", "/about",'/'];

 const showFooterPath = ["/shop", "/about"]

  const shouldShowNavbar = showNavbarPaths.some(path =>
    location.pathname.startsWith(path)
  );
  const shouldShowFooter = showFooterPath.some(path =>
    location.pathname.startsWith(path)
  );

   const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <KrishnaAnimation />;
  }

  return (
    <>
      {shouldShowNavbar && <NavigationBar onContactClick={scrollToFooter} /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductInfo/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {shouldShowFooter && <div ref={footerRef}><Footer /></div>}
    </>
  );
};
