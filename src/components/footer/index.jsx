import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Grid } from '@mui/material';
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
            <>



                <Box className={classes.footerStyle}>

                    <Container1200>

                        <Box sx={{ flexGrow: 1, marginBottom: '20px', borderBottom: 'solid 1px', borderColor: 'white', paddingBottom: '20px' }}>
                            <Grid container spacing={10}>
                                <Grid item lg={5} md={6} sm={6} xs={12}>
                                    <Box className={'footer-form'}>
                                        <TitleHead title="About Shekhar Stone Company" />
                                        <p>Shekhar stone company has been manufacturing and supplying top quality kota stone since 2000. One of the biggest polished kota stone supplier in Ramganjmandi Kota Dist. Rajasthan. In these 25 years, we have worked with an esteemed Customers that included India’s top Builders, industrialists, and real estate constrictors and directly to the customer. </p>
                                    </Box>
                                </Grid>
                                <Grid item lg={3} md={6} sm={6} xs={12}>
                                    <Box>
                                        <TitleHead title="Quick Links" />
                                        <Box className={classes.quicklinks}>
                                            <NavLink className={'link'} to={'/'}>Company Profile</NavLink>
                                            <NavLink className={'link'} to={'/media'}>Media</NavLink>
                                            <NavLink className={'link'} to={'/contact'}>Contact Us</NavLink>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={3} md={6}  sm={6} xs={12}>
                                    <Box>
                                        <TitleHead title="Our Product" />
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
                                </Grid>

                            </Grid>
                        </Box>



                        {/* 2 */}
                        <Box className={classes.rowBottom}>
                            <Box className={''}>
                                <p>Design By <span><b>Webbleu Technologies Pvt Ltd</b></span> - 2024</p>
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
            </>
        )
    }
}

export default Footer
