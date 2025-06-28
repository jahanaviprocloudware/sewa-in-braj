import { useSelector } from "react-redux";
import { Shop } from "../../Shoping/Shop";
import { KrishnaAnimation } from "../Animation/krishnaAnimation";
import { Home } from "../Home/Home";
import NavigationBar from "../Navigation/Navigations";
import { ProductInfo } from "../ProductInfo/ProductInfo";

export const NavigatedPages = () => {
  const { activeTab, loading } = useSelector((state) => state.activeTabs);
  if (loading) {
    return (
      <div>
        <KrishnaAnimation />
      </div>
    );
  } else {
    return (
      <div>
        {activeTab !== "landingPage" && <NavigationBar />}
        {activeTab === "landingPage" && <Home />}
        {activeTab === "selectedCardPage" && <ProductInfo />}
        {activeTab === "ShoppingPage" && <Shop />}
      </div>
    );
  }
};
