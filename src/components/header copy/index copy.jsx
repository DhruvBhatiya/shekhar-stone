import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    transition: "all 0.3s ease-in-out",
    top: '-160px !important',
    background: '#fff !important'
  },
  firstPart: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
    transition: "opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease",
  },
  firstPartHidden: {
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-100%)",
  },
  secondPart: {
    backgroundColor: "#eaeaea",
    padding: "5px",
    borderBottom: "1px solid #ccc",
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
    transition: "opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease",
  },
  secondPartHidden: {
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(-100%)",
  },
  thirdPart: {
    backgroundColor: "#fff",
    padding: "10px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "top 0.3s ease", // Ensures smooth repositioning if needed
  },
}));

const Header = () => {
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="sticky" className={classes.appBar}>
      {/* First Part */}
      <Box className={`${classes.firstPart} ${isScrolled ? classes.firstPartHidden : ""}`}>
        <Toolbar>
          <h1>Header Part 1: Logo and Navigation</h1>
        </Toolbar>
      </Box>

      {/* Second Part */}
      <Box className={`${classes.secondPart} ${isScrolled ? classes.secondPartHidden : ""}`}>
        <Toolbar>
          <p>Header Part 2: Promotional Banner or Submenu</p>
        </Toolbar>
      </Box>

      {/* Third Part */}
      <Box className={classes.thirdPart}>
        <Toolbar>
          <p>Header Part 3: Sticky Navigation or Search Bar</p>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
