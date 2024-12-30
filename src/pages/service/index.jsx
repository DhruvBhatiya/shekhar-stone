import { Box } from "@mui/material";
import React, { useEffect } from "react";
import CardHoverZoom from "../../components/shared/CardHoverZoom";
import {
  Container1200
} from "../../components/shared/CustomContainer";
import { useStylesGloble } from "../../global.style";
import { useStyles } from "./service.style";
import { servicesData } from "./serviceData";

const Services = () => {
  const global = useStylesGloble();
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: "smooth",
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Container1200 className={'py-20'}>
        <Box className={classes.blogStyleParent + ' ' + 'grid grid-cols-3 gap-8'}>
          <CardHoverZoom data={servicesData} />
        </Box>
      </Container1200>
    </>
  );
};

export default Services;
