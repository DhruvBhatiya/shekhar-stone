import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ButtonBorder } from "../../components/shared/ButtonCustom";
import CarouselCard from '../../components/shared/CarouselCard';
import {
  Container1200
} from "../../components/shared/CustomContainer";
import TitleSection from "../../components/shared/TitleSection";
import CarouselComponent from "../../components/Slider";
import { useStylesGloble } from "../../global.style";
import { noImage } from '../../Images';
import { fetchSliders } from "../../state-management/admin/slider/getAllSliders/sliderActions";
import { useStyles } from "./home.style";
import {
  settingsMainSlider,
  settingsProductsSlider,
  slidesMain,
  slidesProducts,
  tabsContentVisionMissoin,
  tabsVisionMissoin,
  WhyChooseData
} from "./homeData";
import VerticalTabs from "../../components/TabVertical";
import CardMui from "../../components/shared/CustomCard/CardMui";
import NotesIcon from '@mui/icons-material/Notes';

const Home = () => {
  const global = useStylesGloble();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgError, setError] = useState(false);

  // Main Slider 
  const MainSlider = useSelector((state) => state.allSlider);
  // const { loading, sliders, error } = sliderState;

  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  // console.log("sliders____", sliders)

  // useEffect(() => {
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       scroll: "smooth",
  //     });
  //   };

  //   scrollToTop();
  //   return () => { };
  // }, []);

  const navigate = useNavigate();

  const handleNavigationAbout = () => {
    navigate('/about');
  };

  // const no =[1, 2, 3, 4];
  // const no1 = no.reverse();
  // console.log("no.reverse()__",no1)


  return (
    <>
      {/* main Slider  */}


      <Box className={classes.main_slider}>
        <CarouselComponent settings={settingsMainSlider} slides={slidesMain}>
          {slidesMain.map((slide, index) => (
            <Box key={index} className={global.slide}>
              <img className={global.bannerImg} src={slide.image} alt="" />
              {/* <h1 className='title'>{slide.content}</h1> */}
            </Box>
          ))}
        </CarouselComponent>
      </Box>

      {/* Shekhar Stone Company */}
      <Container1200 className={classes.growMoreBg + " pt-10 pb-16 "} >
        <Grid className=' lg:px-0 px-2' container spacing={2}>
          <Grid item lg={7} xs={12}>
            <Box className={classes.headingWithLine + ' ' + 'flex gap-5 items-center'}>
              <Box className={classes.home_welcome}>
                <div className="flex gap-5">
                  <div className="servece_0111 mt-[15px] mb-5" ></div>
                  <span>Welcome to Our Website</span>
                </div><br />
                <h1>We are, Shekhar Stone Company</h1>
                <p className="tagline">Shekhar stone company has been manufacturing and supplying top quality kota stone since 2000. One of the biggest polished kota stone supplier in Ramganjmandi Kota Dist. Rajasthan. In these 25 years, we have worked with an esteemed Customers that included India’s top Builders, industrialists, and real estate Contractors and directly to the customer.</p><br />
              </Box>
            </Box>
            <Box className="lg:text-left text-center">
              <Button onClick={handleNavigationAbout} variant="outlined" endIcon={<NotesIcon />}>
                Read More
              </Button>
            </Box>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Box className={classes.imagesSec}>
              <img className="h-[400px]" src={require(`${process.env.REACT_APP_IMAGES_PATH}/about/about.jpg`)} alt={"image"} />
              {/* <img src={noImage} alt={"image"} /> */}
            </Box>
          </Grid>
        </Grid>
      </Container1200>


      {/* Product  */}
      {/* <Container1200 className={global.my40}>
        <TitleSection title={"Our Product"} />
        <Box className={classes.blogStyleParent}>
          <ServiceCard data={productData} />
        </Box>
      </Container1200> */}





      {/* Products */}
      <Box className={classes.productsSliderStyle + ' ' + " "}>
        <Box className={"bg-[#0000008c]  py-[70px] "}>
          <TitleSection title={"Feature Products"} className={"productTitle"} />
          <Container1200 className={"  "} >
            <CarouselComponent settings={settingsProductsSlider} >
              {slidesProducts.map((slide, index) => (
                <>
                  {/* <CarouselCard slide={slide} /> */}
                  <CardMui db={slide} index={index} />
                </>
              ))}
            </CarouselComponent>
          </Container1200>
        </Box>
      </Box>



      {/* Why Choose Shekhar Stone Company ? */}
      <Box className={classes.whyChooseStyle}>
        <Box className="lg:px-0 px-2">
          <TitleSection title={"Why Choose Shekhar Stone Company ?"} className={"productTitle"} />
          <div className="servece-0111" />
          <Container1200 className={"  "} >
            <Grid container spacing={2}>
              {WhyChooseData && WhyChooseData.map((db, index) => (
                <Grid item lg={3} xs={4}>
                  <Box className={"whyChooseBox"}>
                    <Box className="list-icon">{db.icon}</Box>
                    <h3 className="title">{db.title}</h3>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container1200>
        </Box>
      </Box>


      {/* Vision Mission  */}
      {/* <Box className={classes.visionMission + ' ' + " "} >
        <Box className={ ' ' + "py-[80px]  "} >
          <Container1200 >
            <VerticalTabs tabs={tabsVisionMissoin} content={tabsContentVisionMissoin} />
          </Container1200>
        </Box>
      </Box> */}


      {/* Testimonials */}
      {/* <Container1140 className={global.mb70}>
        <TitleSection title={"Testimonials"} />
        <CarouselComponent settings={settingsTestiSlider}>
          {testimonialsData.map((slide, index) => (
            <Box className={classes.testimonial}>
              {slide.image ? <Avatar alt={slide.title} src={slide.image} /> :
                <Avatar alt={slide.title} src={'/'} />}
              <Box key={index} className={classes.testiSliderStyle}>
                <FormatQuoteIcon />
                <p className="description">{slide.description}</p>
                <h4 className="title">{slide.title}</h4>
              </Box>
            </Box>
          ))}
        </CarouselComponent>
      </Container1140> */}

      {/* Partner Brands */}
      {/* <Container10 className={global.pt20 + ' ' + global.mb70}>
        <Box className={classes.brandStyle}>
          <TitleSection title={"Partner Brands"} />
          <CarouselComponent settings={settingsPartnerBrandsSlider}>
            {partnerBrandsData.map((slide, index) => (
              <Box key={index} className={classes.mainSlide}>
                <img className={classes.bannerImg} src={slide.image} alt="" />
              </Box>
            ))}
          </CarouselComponent>
          <Box className={classes.brandBtn}>
            <ButtonBorder>Knore More</ButtonBorder>
          </Box>
        </Box>
      </Container10> */}

      {/* Our Blog */}
      {/* <Container1320 className={global.my70}>
        <TitleSection title={"Our Blog"} subTitle={"Knowledge is Power"} />
        <Box className={classes.blogStyleParent}>
          <BlogCard data={blogData} />
        </Box>
      </Container1320> */}
    </>
  );
};

export default Home;
