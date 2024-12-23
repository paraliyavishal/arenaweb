import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubmenuOpen = () => {
    setSubmenuOpen(true);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container>
        <Toolbar sx={{   display: "flex",justifyContent: "space-between",height: "80px",alignItems: "center", }}>
          <Box sx={{ display: "flex",alignItems: "center", flex: 1,justifyContent: "center", maxWidth: "124px", }} mx={{ lg: 2, xs: 1 }}>
            <NavLink to="/">
              <img src={logo} alt="elegance" style={{ objectFit: "contain", width: "175px", height: "67px" }} />
            </NavLink>
          </Box>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ position: "absolute", right: 16 }} ><MenuIcon /></IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <Box>
                  <Box sx={{   display: "flex",alignItems: "center",justifyContent: "space-between",padding: 2,backgroundColor: "#221C3E", }}>
                    <Box sx={{ flexGrow: 1, height: 50, maxWidth: "100px" }}>
                      <NavLink to="/">
                        <img src={logo} alt="elegance" style={{ objectFit: "contain" }}/>
                      </NavLink>
                    </Box>
                    <IconButton onClick={toggleDrawer} sx={{ color: "#6B5FFE", backgroundColor: "white", borderRadius: "8px" }} >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <List sx={{ width: 250, height: "100vh", backgroundColor: "#221C3E", color: "white" }}>
                    <ListItem button component={NavLink} to="/">
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/games">
                      <ListItemText primary="Games" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/pricing">
                      <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem button component={NavLink} to="/about">
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button component={NavLink}   onClick={handleSubmenuToggle} >
                      <ListItemText primary="Pages" />
                      <IconButton edge="end" color="inherit" aria-label="submenu" onClick={handleSubmenuToggle} sx={{ marginLeft: 'auto', border: "1px solid white", "&:hover": { backgroundColor: "white", color: "#6B5FFE" } }} >
                        <AddRoundedIcon />
                      </IconButton>
                    </ListItem>
                    {submenuOpen && (
                      <Box sx={{backgroundColor: "#100A2E",padding: "8px 0",color: "#fff",position: "relative"}}>
                        <List>
                          <ListItem button component={NavLink} to="/match_schedule">
                            <ListItemText primary="Match Schedule" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/blogs_and_news">
                            <ListItemText primary="Blogs and News" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/testimonials">
                            <ListItemText primary="Testimonials" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/gallery">
                            <ListItemText primary="Gallery" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/faq">
                            <ListItemText primary="FAQ" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/team">
                            <ListItemText primary="Team" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/contact_us">
                            <ListItemText primary="Contact Us" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/coming_soon">
                            <ListItemText primary="Coming Soon" />
                          </ListItem>
                          <ListItem button component={NavLink} to="/page_not_found">
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
                  <Typography color="inherit" component={NavLink} to="/" mx={{ lg: 3, xs: 1.5 }}
                    sx={{textDecoration: "none",transition: "0.6s",color: "inherit",fontWeight:"600",padding:"20px 0px",position: "relative",display: "inline-block",
                      ":before": {content: '""',position: "absolute",height: "5px",width: "0%",backgroundColor: "white",bottom: "0",left: "0",transition: "width 0.3s",},
                      ":hover:before": {width: "100%",},"&:hover":{color:"#6B5FFE"}
                    }}>Home</Typography>
                  <Typography color="inherit" component={NavLink} to="/games" mx={{ lg: 3, xs: 1.5 }}
                    sx={{textDecoration: "none",transition: "0.6s",color: "inherit",fontWeight:"600",padding:"20px 0px",position: "relative",display: "inline-block",
                      ":before": {content: '""',position: "absolute",height: "5px",width: "0%",backgroundColor: "white",bottom: "0",left: "0",transition: "width 0.3s",},
                      ":hover:before": {width: "100%",},"&:hover":{color:"#6B5FFE"}
                    }}>Games</Typography>
                  <Typography color="inherit" component={NavLink} to="/pricing" mx={{ lg: 3, xs: 1.5 }}
                    sx={{textDecoration: "none",transition: "0.6s",color: "inherit",fontWeight:"600",padding:"20px 0px",position: "relative",display: "inline-block",
                      ":before": {content: '""',position: "absolute",height: "5px",width: "0%",backgroundColor: "white",bottom: "0",left: "0",transition: "width 0.3s",},
                      ":hover:before": {width: "100%",},"&:hover":{color:"#6B5FFE"}
                    }}>Pricing</Typography>
                  <Typography color="inherit" component={NavLink} to="/about" mx={{ lg: 3, xs: 1.5 }}
                    sx={{textDecoration: "none",transition: "0.6s",color: "inherit",fontWeight:"600",padding:"20px 0px",position: "relative",display: "inline-block",
                      ":before": {content: '""',position: "absolute",height: "5px",width: "0%",backgroundColor: "white",bottom: "0",left: "0",transition: "width 0.3s",},
                      ":hover:before": {width: "100%",},"&:hover":{color:"#6B5FFE"}
                    }}>About</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center",position: "relative","&:hover .submenu": {  display: "block",}}} onMouseEnter={handleSubmenuOpen} onMouseLeave={handleSubmenuClose} >
               
                <Typography color="inherit" component={NavLink} mx={{ lg: 3, xs: 1.5 }}
                  sx={{textDecoration: "none",transition: "0.6s",color: "inherit",fontWeight:"600",padding:"20px 0px",position: "relative",display: "flex",alignItems: "center",
                    ":before": {content: '""',position: "absolute",height: "5px",width: "0%",backgroundColor: "white",bottom: "0",left: "0",transition: "width 0.3s",},
                    ":hover:before": {width: "100%",},"&:hover":{color:"#6B5FFE"}
                  }}
                  >Pages<ArrowDropDownRoundedIcon sx={{ marginLeft: 1 }} /></Typography>
                <Box className="submenu" sx={{display:"none",position: "absolute",top: "100%",left: "0%",width: "230px",color: "#fff",cursor:"pointer",backgroundColor: "#100A2E",padding: "8px 0",zIndex: 10,}}>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/match_schedule")}>Match Schedule</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/blogs_and_news")}>Blogs and News</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/testimonials")}>Testimonials</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/gallery")}>Gallery</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/faq")}>FAQ</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/team")}>Team</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/contact_us")}>Contact Us</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/coming_soon")}>Coming Soon</Typography>
                  <Typography sx={{ padding: "8px 16px",transition:".7s","&:hover":{color:"#6B5FFE"} }} onClick={() => navigate("/page_not_found")}>404</Typography>
                </Box>
              </Box>
                <Button className='c-button c-button--gooey' onClick={() => navigate("/contact_us")}
                  sx={{borderRadius: "0px",overflow: "hidden",textTransform: "unset",border: "1px solid #30d855",color: "#30d855",fontSize: "16px",fontWeight: "600",lineHeight: "38px",fontFamily: "'Raleway', sans-serif",padding: "5px 30px",
                    "&:hover": { color: "black" },
                  }}
                >Book Now
                  <Box className='c-button__blobs' >
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;