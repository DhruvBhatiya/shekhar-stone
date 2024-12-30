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
                    Welcome to Shekhar Stone Company!
                  </Typography>

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}> Shekhar stone company has been manufacturing and supplying top quality kota stone since 2000. One of the biggest polished kota stone supplier in Ramganjmandi Kota Dist. Rajasthan. In these 25 years, we have worked with an esteemed Customers that included India’s top Builders, industrialists, and real estate Contractors and directly to the customer. </Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}> The Company has long and distinguished history of supplying customers with high quality Kota stone products.</Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>This has pushed us to handpick a selection of kota stones suited to the sensibility and functionality of our customers. </Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600'}}>We have earned the status of an industry pioneer by offering such premium varieties of kota stone to choose from. Our reputation and the desire to deliver the best are a testament to our reliability.</Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}> Are you in search of the components that can make you home look way more superior than ever then this might be the right time to order our brand Kota stone Products.</Typography>
                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>These will remain the talks of the town for the beauty of your Property.</Typography>

                  {/* <ul className="list-disc list-inside pl-4 space-y-2 mb-4 text-base">
                    <li><strong>Lorem Ipsum is simply dummy text:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
                    <li><strong>Lorem Ipsum is simply dummy text:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </li>
                   
                  </ul> */}

                  <Typography variant="body2" color="text.secondary" component="p" sx={{ marginBottom: '16px', fontSize: '16px' }}>Thank you for choosing Shekhar Stone Company. We look forward to partnering with you and contributing to your achievements.</Typography>
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
