import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import { menuListMobile } from '../header/headerData';
import { Container10, Container100, Container1140, Container1200, Container1320, Container1400, Container1440 } from '../shared/CustomContainer';
import { useStyles } from './footer.style';
import { ProductsLinks } from './footerData';


const Footer = () => {
    const classes = useStyles();
    const location = useLocation();
    const path = location.pathname;
    const isAdmin = path.includes("admin");

    const TitleHead = ({ title }) => {
        return (
            <h1 className={classes.titleHead}>{title}</h1>
        )
    }

    if (isAdmin !== true) {
        return (
            <Box className={classes.footerStyle}>
                <Container1200>
                    {/* 1 */}
                    <Box className={classes.row}>

                        <Box className={'footer-form'}>
                            <TitleHead title="About Shekhar Stone" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </Box>

                        <Box>
                            <TitleHead title="Quick Links" />
                            <Box className={classes.quicklinks}>
                                <NavLink className={'link'} to={'/'}>Company Profile</NavLink>
                                <NavLink className={'link'} to={'/media'}>Media</NavLink>
                                <NavLink className={'link'} to={'/contact'}>Contact Us</NavLink>
                            </Box>
                        </Box>

                        <Box>
                            <TitleHead title="Our Services" />
                            <Box className={classes.quicklinks}>
                                {ProductsLinks && ProductsLinks.map((db, index) => {
                                    return (
                                        db.link !== '/offer-of-month' &&
                                        <NavLink className={'link'} key={index} to={db.link}>{db.title}</NavLink>
                                    )
                                }
                                )}
                            </Box>
                        </Box>

                        {/* 
                        <Box>
                            <TitleHead title="Useful Link" />
                            <Box className={classes.socialLinks}>
                                {socialLinks.map((db, index) => (
                                    <Box>{db.icon}</Box>
                                ))}
                            </Box>
                        </Box> */}
                    </Box>
                    {/* 2 */}
                    <Box className={classes.rowBottom}>

                        <Box className={''}>
                            <p>Design By <span><b>Dhruv Computers</b></span> - 2024</p>
                        </Box>
                        <Box>

                        </Box>
                    </Box>
                </Container1200>

                <ScrollToTop
                    smooth
                    component={
                        <KeyboardDoubleArrowUpIcon style={{ fontSize: 25, color: 'black' }} />
                    }
                />
            </Box>
        )
    }
}

export default Footer
