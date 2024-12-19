import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Button, Typography, useMediaQuery } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useStyles } from "./header.style";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Container1200 } from "../shared/CustomContainer";
import DrawerRight from "../DrawerRight";
import { adminLinks, menuListDesktop } from "../header copy/headerData";

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const [shrink, setShrink] = useState(false);

  const isAdmin = path.includes("admin");

  // Use `useMediaQuery` to detect screen size
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleScroll = () => {
    setShrink(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (path === "/admin/login" || path === "/admin/login/") return null;

  return (
    <Box className={classes.headerContainer}>
      <Container1200>
        {/* Upper Section */}
        <Box
          className={`${classes.upperHeader} ${shrink ? classes.shrinkUpper : ""}`}
          style={{ display: isMobile ? "none" : "flex" }}
        >
          <Box className={classes.logo}>
            <NavLink className="leading-3" to="/">
              <img
                src={require(`${process.env.REACT_APP_IMAGES_PATH}/logo/logo.jpeg`)}
                width={138}
                alt="My Image"
              />
            </NavLink>
          </Box>
          <Box className={classes.contactInfo}>
            <Button startIcon={<WhatsAppIcon />} href="https://wa.me/+919414191888" target="_blank">
              <Box className="leading-5">
                <Box>+91 9414191888</Box>
                <Box className="text-xs text-slate-400">SEND WHATSAPP</Box>
              </Box>
            </Button>
            <Button startIcon={<PhoneIcon />} href="tel:+918114438007">
              <Box className="leading-5">
                <Box>+91 8114438007</Box>
                <Box className="text-xs text-slate-400">CALL US ON</Box>
              </Box>
            </Button>
            <Button startIcon={<EmailIcon />} href="mailto:stoneshekhar@gmail.com">
              <Box className="leading-5">
                <Box>stoneshekhar@gmail.com</Box>
                <Box className="text-xs text-slate-400">DROP US A LINE</Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Container1200>

      {/* Lower Section */}
      <Box className="bg-[#1976d2]">
        <Container1200>
          {isMobile ? (
            // Mobile: Show Drawer Menu
            <DrawerRight menu={menuListDesktop} adminLinks={adminLinks} isAdmin={isAdmin} />
          ) : (
            // Desktop: Show Desktop Header
            <AppBar
              position="sticky"
              className={`${classes.lowerHeader} ${shrink ? classes.shrinkLower : ""}`}
            >
              <Toolbar style={{ padding: 0 }}>
                <Box className={classes.menuList}>
                  <ul>
                    <li>
                      <NavLink to="/" className={({ isActive }) => (isActive ? classes.activeLink : "")}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? classes.activeLink : "")}
                      >
                        Company Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? classes.activeLink : "")}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </Box>
              </Toolbar>
            </AppBar>
          )}
        </Container1200>
      </Box>
    </Box>
  );
};

export default Header;
