import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import { useStyles } from './media.style';
import CommingSoon from '../../components/shared/CommingSoon';



const Media = () => {
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
      <Box className={classes.productsSliderStyle}>
        <Container1200 className={" pt-12 pb-6 "} >
          <CommingSoon />
        </Container1200>
      </Box>
    </>
  )
}

export default Media
