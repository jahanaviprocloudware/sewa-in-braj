import { useSelector } from "react-redux";
import { Home } from "../Home/Home";
import { Shop } from "../../Shoping/Shop";
import NavigationBar from "../Navigation/Navigations";

export const NavigatedPages = () => {
      const{activeTab} = useSelector((state) => state.activeTabs);

      console.log('activeTab>>>>', activeTab)
    // activeTab !== 'landingPage' && <NavigationBar/>
    
        // if(activeTab === 'landingPage') {
        //     console.log('check')
        //     return (
        //         <Home/>
        //     )
        // }
        // if(activeTab === 'ShoppingPage') {
        //     return (
        //         <Shop/>
        //     )
        // }
        // else(
        //     <Home/>
        // )

        return(
            <div>
                {activeTab !== 'landingPage' &&<NavigationBar />}
                {activeTab === 'landingPage' && <Home />}
                {activeTab === 'ShoppingPage' && <Shop />}
            </div>
        )
  
}