import { useSelector } from "react-redux";
import { Home } from "../Home/Home";
import { Shop } from "../../Shoping/Shop";
import NavigationBar from "../Navigation/Navigations";
import { KrishnaAnimation } from "../Animation/krishnaAnimation";
import { useEffect } from "react";

export const NavigatedPages = () => {
  const { activeTab, loading } = useSelector((state) => state.activeTabs);
//   useEffect(() => {
    if (loading) {
      return <KrishnaAnimation />;
    }
//   }, [loading]);
else{
  return (
    <div>
      {activeTab !== "landingPage" && <NavigationBar />}
      {activeTab === "landingPage" && <Home />}
      {activeTab === "ShoppingPage" && <Shop />}
    </div>
  );
}
};
