import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';

import { useStyles } from './about.style';



const About = () => {
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
        <Container1200 className={" pt-12 pb-9 "} >
          <Card sx={{ display: 'flex', marginBottom: '30px', boxShadow: 'none' }}>
            <Grid container spacing={5}>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <Typography component="div" variant="h4" sx={{ marginBottom: '15px', fontWeight: '600' }}>
                    Welcome to Shekhar Stone!
                  </Typography>

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </Typography>

                  {/* <ul className="list-disc list-inside pl-4 space-y-2 mb-4 text-base">
                    <li><strong>Lorem Ipsum is simply dummy text:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
                    <li><strong>Lorem Ipsum is simply dummy text:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </li>
                   
                  </ul> */}

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>Thank you for choosing Shekhar Stone. We look forward to partnering with you and contributing to your achievements.</Typography>
                </CardContent>
              </Grid>
              <Grid item lg={6} xs={12}>
                <CardContent sx={{}} >
                  <CardMedia
                    component="img"
                    sx={{ padding: '0 10px' }}
                    image={require(`${process.env.REACT_APP_IMAGES_PATH}/about/about.jpg`)}
                    alt="Card Image"
                  />
                </CardContent>
              </Grid>
            </Grid>


          </Card>



        </Container1200>

        {/* Vision Mission  */}
        {/* <Box className={classes.visionMission + ' ' + "py-[80px]  "} >
          <Container1200 >
            <VerticalTabs tabs={tabsVisionMissoin} content={tabsContentVisionMissoin} />
          </Container1200>
        </Box> */}
      </Box>




    </>
  )
}

export default About
