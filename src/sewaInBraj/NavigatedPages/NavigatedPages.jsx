import { useSelector } from "react-redux";
import { Home } from "../Home/Home";
import { Shop } from "../../Shoping/Shop";

export const NavigatedPages = () => {
      const{activeTab} = useSelector((state) => state.activeTabs);

      console.log('activeTab>>>>', activeTab)
    
        if(activeTab === 'landingPage') {
            console.log('check')
            return (
                <Home/>
            )
        }
        if(activeTab === 'ShoppingPage') {
            return (
                <Shop/>
            )
        }
        else(
            <Home/>
        )
  
}