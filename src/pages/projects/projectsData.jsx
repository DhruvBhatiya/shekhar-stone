import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { commanBg } from '../../Images';

export const slidesMain = [
    { image: commanBg},
    { image: commanBg},
    { image: commanBg},
    { image: commanBg},
];

// Main Slider Setting 
export const settingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <ArrowBackIosNewIcon/>,
    nextArrow:<ArrowForwardIosIcon/>
};
