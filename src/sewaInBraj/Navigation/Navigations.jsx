import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton, Tabs, Tab, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { setActivetab } from '../app/reducer/tabSlice';

const navItems = [
  { label: 'Home', value: 0, path: 'landingPage' },
  { label: 'Shop', value: 1, path: 'ShoppingPage' },
  { label: 'About', value: 2, path: '/about' },
  { label: 'Contact', value: 3, path: '/contact' },
];

export default function NavigationBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    dispatch(setActivetab(navItems[newValue].path));
  };

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleDrawerItemClick = (item) => {
    setValue(item.value);
    setDrawerOpen(false);
    dispatch(setActivetab(item.path));
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 200 }} role="presentation" onClick={handleDrawerToggle}>
                <List>
                  {navItems.map((item) => (
                   
                    <ListItem
                      button
                      key={item.value}
                      selected={value === item.value}
                      onClick={() => handleDrawerItemClick(item)}
                    >
                     {console.log('value>>>', value)}
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="navigation tabs"
          >
            {navItems.map((item) => (
              <Tab key={item.value} label={item.label} />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}