import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Button, Typography, useMediaQuery, Container } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DrawerRight from "../DrawerRight";
import { adminLinks, menuListDesktop } from "../header/headerData";
import InquiryModal from "./InquiryModal";
import { ButtonBorder } from '../shared/ButtonCustom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CallIcon from '@mui/icons-material/Call';
import { useStyles } from "./header.style";
import { Container1200 } from "../shared/CustomContainer";


const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  const [shrink, setShrink] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (path === "/admin/login" || path === "/admin/login/") return null;

  return (
    <Box className={classes.headerContainer}>
      {/* First Section */}
      <Box className={`${classes.lowerHeader} ${shrink ? classes.shrinkLower : ""}`}>
        <Container1200>
          <Toolbar style={{ display: "flex", justifyContent: "space-between", padding: "0 0px", minHeight: '50px' }}>
            {/* Left Side */}
            <Box className="flex  items-center gap-5 ">
              <Typography variant="body2" className="hidden md:block lg:block xl:block">
                <LocationOnIcon /> Nimana Road Vill., Mayla Ramganjmandi, Dist. Kota, Rajasthan
              </Typography>
              <Typography variant="body2" className="md:block lg:block xl:block">
                <TextSnippetIcon /> <strong>GST:</strong> 08AKHPM6411C1ZG
              </Typography>
              <Typography variant="body2" className="hidden md:block lg:block xl:block">
                <CallIcon /> <strong>CALL ON </strong><a className="text-white text-sm" href="tel:+919414191888">+91 9414191888</a>
              </Typography>
            </Box>

            {/* Right Side */}
            <Box style={{ display: "flex", alignItems: "center" }}>
              {/* <Box style={{ marginRight: "20px" }}>
            <select
              onChange={(e) => console.log("Selected Language:", e.target.value)}
              style={{
                padding: "5px 10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
            </select>
          </Box> */}

              <ButtonBorder
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => setOpenModal(true)}
              >
                <EmailIcon /> &nbsp; Send Inquiry
              </ButtonBorder>
            </Box>
          </Toolbar>
        </Container1200>
      </Box>

      {/* Inquiry Modal */}
      <InquiryModal open={openModal} onClose={() => setOpenModal(false)} />

      {/* Second Section */}
      <Container1200>
        <Box className={`${classes.upperHeader} ${shrink ? classes.shrinkUpper : ""}`}>
          <Box>
            <NavLink to="/">
              <img src={require(`${process.env.REACT_APP_IMAGES_PATH}/logo/logo.jpeg`)} alt="Logo" width={100} title="Shekhar Stone Company" />
            </NavLink>
          </Box>
          <Box className={classes.contactInfo + ' ' + 'flex gap-1 lg:gap-5'}>
            <Button startIcon={<WhatsAppIcon />} href="https://wa.me/+919829545808" target="_blank">
              <Box className="leading-5 hidden lg:block xl:block">
                <Box>+91 9829545808</Box>
                <Box className="text-xs text-slate-400">SEND WHATSAPP</Box>
              </Box>
            </Button>
            <Button startIcon={<PhoneIcon />} href="tel:+919414191888">
              <Box className="leading-5 hidden lg:block xl:block">
                <Box>+91 9414191888</Box>
                <Box className="text-xs text-slate-400">CALL US ON</Box>
              </Box>
            </Button>
            <Button startIcon={<EmailIcon />} href="mailto:stoneshekhar@gmail.com">
              <Box className="leading-5 hidden lg:block xl:block">
                <Box>stoneshekhar@gmail.com</Box>
                <Box className="text-xs text-slate-400">DROP US A LINE</Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Container1200>

      {/* Third Sticky Section */}
      <Box className={classes.stickyPart + ' ' + 'shadow-2xl'}>
        {/* <Typography variant="h6">Sticky Navigation</Typography> */}
        {isMobile ? (
          <DrawerRight menu={menuListDesktop} adminLinks={adminLinks} />
        ) : (
          <Container1200>
            <Box className="flex gap-5 uppercase ">
              <NavLink to="/" className="px-2">
                Home
              </NavLink>
              <NavLink to="/about" className="px-2">
                About
              </NavLink>
              <NavLink to="/contact" className="px-2">
                Contact
              </NavLink>
            </Box>
          </Container1200>
        )}
      </Box>

    </Box>
  );
};

export default Header;
