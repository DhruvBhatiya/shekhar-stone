import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Button, Menu, MenuItem, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useStyles } from "./header.style";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const [shrink, setShrink] = useState(false);

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
      {/* Upper Section */}
      <Box className={`${classes.upperHeader} ${shrink ? classes.shrinkUpper : ""}`}>
        <Box className={classes.logo}>
          <NavLink className="leading-3" to="/">
            <Typography variant="h5" className="text-blue-900 font-extrabold uppercase">
              Shekhar
            </Typography>
            <Typography variant="caption" className="text-blue-900 font-medium uppercase">
              Kota Stone Company
            </Typography>
          </NavLink>
        </Box>
        <Box className={classes.contactInfo}>
          <Button startIcon={<WhatsAppIcon />} href="https://wa.me/123456789">
            <Box className="leading-5">
              <Box>+123456789</Box>
              <Box className="text-xs text-slate-400">SEND WHATSAPP</Box>
            </Box>
          </Button>
          <Button startIcon={<PhoneIcon />} href="tel:+123456789">
            <Box className="leading-5">
              <Box>+123456789</Box>
              <Box className="text-xs text-slate-400">CALL US ON</Box>
            </Box>
          </Button>
          <Button startIcon={<EmailIcon />} href="mailto:info@example.com">
            <Box className="leading-5">
              <Box>info@example.com</Box>
              <Box className="text-xs text-slate-400">DROP US A LINE</Box>
            </Box>
          </Button>
        </Box>
      </Box>

      {/* Lower Section */}
      <AppBar position="sticky" className={`${classes.lowerHeader} ${shrink ? classes.shrinkLower : ""}`}>
        <Toolbar>
          <Box className={classes.menuList}>
            <ul>
              {/* Add menu items dynamically */}
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? classes.activeLink : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? classes.activeLink : "")}>
                  Company Profile
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/services" className={({ isActive }) => (isActive ? classes.activeLink : "")}>
                  Services
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? classes.activeLink : "")}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
