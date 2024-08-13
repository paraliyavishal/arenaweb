import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {AppBar,Toolbar,IconButton,Typography,Drawer,List,ListItem,ListItemText,Box,Container,Button,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/images/home/logo.png";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const [showSearch, setShowSearch] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearch((prev) => !prev);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Games", path: "/Games" },
    { text: "Pricing", path: "/Pricing" },
    { text: "About", path: "/About" },
    { text: "Pages", path: "/Pages" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none",paddingTop:"10px"}}>
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "80px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
              maxWidth: "124px",

            }}
            mx={{ lg: 2, xs: 1 }}
          >
            <NavLink to="/">
              <img src={logo} alt="elegance" style={{ objectFit: "contain", width: "175px", height: "67px" }} />
            </NavLink>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ position: "absolute", right: 16, }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: 2,
                      backgroundColor: "#221C3E",
                    }}
                  >
                    <Box sx={{ flexGrow: 1, height: 50, maxWidth: "100px" }}>
                      <NavLink to="/">
                        <img
                          src={logo}
                          alt="elegance"
                          style={{ objectFit: "contain" }}
                        />
                      </NavLink>
                    </Box>
                    <IconButton
                      onClick={toggleDrawer}
                      sx={{ color: "#6B5FFE", backgroundColor: "white", borderRadius: "8px" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List sx={{ width: 250, height: "100vh", backgroundColor: "#221C3E", color: "white" }}>
                    {menuItems.map((item, index) => (
                      <ListItem
                        button
                        key={index}
                        component={NavLink}
                        to={item.path}
                        onClick={item.text === "Pages" ? handleSubmenuToggle : toggleDrawer}
                      >
                        <ListItemText primary={item.text} />
                        {item.text === "Pages" && (
                          <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="submenu"
                            onClick={handleSubmenuToggle}
                            sx={{ marginLeft: 'auto', border: "1px solid white", "&:hover": { backgroundColor: "white", color: "#6B5FFE" } }}
                          >
                            <AddRoundedIcon />
                          </IconButton>
                        )}
                      </ListItem>
                    ))}
                    {submenuOpen && (
                      <Box sx={{
                        backgroundColor: "#100A2E",
                        padding: "8px 0",
                        color: "#fff",
                        position: "relative"
                      }}>
                        <List>
                          <ListItem button component={NavLink} to="/MatchSchedule">
                            <ListItemText primary="Match Schedule" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/BlogsAndNews">
                            <ListItemText primary="Blogs and News" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/Testimonials">
                            <ListItemText primary="Testimonials" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/Gallery">
                            <ListItemText primary="Gallery" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/Faq">
                            <ListItemText primary="FAQ" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/Team">
                            <ListItemText primary="Team" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/ContactUs">
                            <ListItemText primary="Contact Us" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/ComingSoon">
                            <ListItemText primary="Coming Soon" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/404">
                            <ListItemText primary="404" />
                          </ListItem>
                        </List>
                      </Box>
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {menuItems.slice(0, 3).map((item) => (
                  <Typography
                    color="inherit"
                    key={item.text}
                    component={NavLink}
                    to={item.path}
                    mx={{ lg: 3, xs: 1.5 }}
                    sx={{
                      textDecoration: "none",
                      transition: "0.6s",
                      color: "inherit",
                      ":hover": { color: "#6B5FFE" },
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                {menuItems.slice(3).map((item) => (
                  <Typography
                    color="inherit"
                    key={item.text}
                    component={NavLink}
                    to={item.path}
                    onClick={item.text === "Pages" ? handleSubmenuToggle : undefined}
                    mx={{ lg: 3, xs: 1.5 }}
                    sx={{
                      textDecoration: "none",
                      transition: "0.6s",
                      color: "inherit",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      ":hover": { color: "#6B5FFE" },
                    }}
                  >
                    {item.text}
                    {item.text === "Pages" && (
                      <ArrowDropDownRoundedIcon sx={{ marginLeft: 1 }} />
                    )}
                    {item.text === "Pages" && submenuOpen && (
                      <Box sx={{
                        display: "block",
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        width: "230px",
                        color: "#fff",
                        backgroundColor: "#100A2E",
                        padding: "8px 0",
                        zIndex: 10,
                      }}>
                        <Typography sx={{ padding: "8px 16px" }}>Match Schedule</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Blogs and News</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Testimonials</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Gallery</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>FAQ</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Team</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Contact Us</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>Coming Soon</Typography>
                        <Typography sx={{ padding: "8px 16px" }}>404</Typography>
                      </Box>
                    )}
                  </Typography>
                ))}
                <Button
                  className='c-button c-button--gooey'
                  sx={{
                    borderRadius: "0px",
                    overflow: "hidden",
                    textTransform:"unset",
                    border: "1px solid #30d855",
                    color: "#30d855",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "38px",
                    fontFamily: "'Raleway', sans-serif",
                    padding: "5px 30px",
                    "&:hover": { color: "black" },
                  }}
                >
                  Book Now
                  <Box className='c-button__blobs'>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                  </Box>
                </Button>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: "block", height: "0", width: "0" }}>
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                      <feBlend in="SourceGraphic" in2="goo"></feBlend>
                    </filter>
                  </defs>
                </svg>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;