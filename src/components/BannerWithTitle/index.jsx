import React from 'react';
import { ContainerFluid } from '../shared/CustomContainer';
import { useStyles } from './BannerWithTitle.style';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

const BannerWithTitle = ({ image, title }) => {
    const classes = useStyles();

    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        width: '100%',
        backgroundAttachment: 'fixed'
    };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: title }
    ];

    return (
        <ContainerFluid>
            <Box className={classes.ourteambanner} style={backgroundStyle}>
                <Box className="bg-[#0000004f] w-full">
                    {/* <img src={image} className={classes.ourteambannerimg} alt="" /> */}
                    <h2 className={classes.bannertitle}>{title}</h2>
                </Box>
            </Box>
            {/* <Box className={classes.breadcrumbWrapper}>
                <Breadcrumbs aria-label="breadcrumb">
                    {breadcrumbItems.map((item) => (
                        <Link key={item.label} href={item.href} color="inherit" underline="hover">
                            {item.label}
                        </Link>
                    ))}
                </Breadcrumbs>
            </Box> */}
        </ContainerFluid>
    )
}

export default BannerWithTitle;



// import React from 'react';
// import { ContainerFluid } from '../shared/CustomContainer';
// import { useStyles } from './BannerWithTitle.style';
// import { Box } from '@mui/material';

// const BannerWithTitle = ({ image, title }) => {
//     const classes = useStyles();

//     const backgroundStyle = {
//         backgroundImage: `url(${image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '250px',
//         width: '100%',
//         backgroundAttachment: 'fixed'
//     };

//     return (
//         <ContainerFluid>
//             <Box className={classes.ourteambanner} style={backgroundStyle}>
//                 <Box className="bg-[#0000004f] w-full">
//                     {/* <img src={image} className={classes.ourteambannerimg} alt="" /> */}
//                     <h2 className={classes.bannertitle}>{title}</h2>
//                 </Box>
//             </Box>
//         </ContainerFluid>
//     )
// }

// export default BannerWithTitle
