import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerComponent } from "../Drawer/Drawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../logos/logo.webp";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const navItems = [
  { label: "Home", value: 0, path: "/" },
  { label: "Shop", value: 1, path: "/shop" },
  { label: "About", value: 2, path: "/about" },
  { label: "Contact", value: 3, path: "/footer" },
];

export default function NavigationBar({ onContactClick }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const getTabValue = () => {
  const found = navItems.find(item => item.path === location.pathname);
  return found ? found.value : 0;
};
  const [value, setValue] = useState(getTabValue());

  const [cartDrawerOpen, setcartDrawerOpen] = useState(false);

  const navigate = useNavigate();

  const hideSearchBar = ["/about",'/'];

  const shouldShowNavbar = hideSearchBar.includes(location.pathname);

  useEffect(() => {
  const found = navItems.find(item => item.path === location.pathname);
  setValue(found ? found.value : 0);
}, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    const selectedItem = navItems.find((item) => item.value === newValue);
    const item = navItems[newValue];
    if (item.label === "Contact" && onContactClick) {
      onContactClick();
    } else if (selectedItem?.path) {
      navigate(selectedItem.path);
    }
  };

  const handleDrawerItemClick = (item) => {
    setValue(item.value);
    setDrawerOpen(false);

    if (item.label === "Contact" && onContactClick) {
      onContactClick();
    } else {
      navigate(item.path);
    }
  };

  const handleAddToCart = () => {
    setcartDrawerOpen(true);
  };

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      <AppBar position="fixed" color="default">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                 {!['/'].includes(location.pathname) && <img
                    src={logo}
                    alt="Logo"
                    style={{ height: '4rem', marginLeft: 10 , width:'4rem'}}
                  />}
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                {!shouldShowNavbar && <SearchBar />}
                <div
                  className="p-2 d-flex justify-content-start cursor-pointer"
                  onClick={handleAddToCart}
                >
                  <ShoppingCartIcon />
                </div>
              </Box>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 200 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        button
                        key={item.value}
                        selected={value === item.value}
                        onClick={() => handleDrawerItemClick(item)}
                      >
                        <ListItemText primary={item.label} />
                      </ListItem>
                    ))}
                  </List>
                       <div className="d-flex gap-2">
                      <a
                        href="https://api.whatsapp.com/send?phone=918923720937"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none"
                      >
                        <WhatsAppIcon style={{ color: "green", marginLeft: '5px'}} />
                      </a>
                      <a
                        href="https://www.instagram.com/vrindasrockband"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <InstagramIcon style={{ color: "rgb(215 3 197)"}} />
                      </a>
                      <a
                        href="https://youtube.com/@sevainvraja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        <YouTubeIcon style={{ color: "red"}} />
                      </a>
                    </div>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
             {!['/'].includes(location.pathname) && <img
                src={logo}
                alt="Logo"
                style={{ height: '4rem', marginRight: 24 ,width:'4rem'}}
              />}
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="navigation tabs"
                sx={{ flexGrow: 1 }}
              >
                {navItems.map((item) => (
                  <Tab key={item.value} label={item.label} />
                ))}
              </Tabs>
              {!shouldShowNavbar && <SearchBar />}
              <div
                className="p-2 d-flex justify-content-start"
                onClick={handleAddToCart}
              >
                <ShoppingCartIcon />
              </div>
            </Box>
          )}
         
        </Toolbar>
    
      </AppBar>
      <DrawerComponent
        drawerOpen={cartDrawerOpen}
        setDrawerOpen={setcartDrawerOpen}
      />
    </div>
  );
}
