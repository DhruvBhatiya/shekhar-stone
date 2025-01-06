
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NearMeIcon from '@mui/icons-material/NearMe';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import VisibilityIcon from '@mui/icons-material/Visibility';

import aboutImg from '../../assets/img/images/about/about.webp';

// Product 
import p1 from '../../assets/products/1.jpeg';
import p2 from '../../assets/products/2.jpeg';
import p3 from '../../assets/products/22x16.jpeg';
import p4 from '../../assets/products/2x2-uncut.jpeg';
import p5 from '../../assets/products/23x23.jpeg';
import p6 from '../../assets/products/3.jpeg';
import p22x46 from '../../assets/products/22x46.jpeg';
import red from '../../assets/products/red.jpeg';
import green_kota_stone from '../../assets/products/green_kota_stone.jpg';
import mirror_polish_kota_stone from '../../assets/products/mirror_polish_kota_stone.jpg';


// Main Slider 
import slider1 from '../../assets/sliderMain/1.jpg'
import slider2 from '../../assets/sliderMain/2.jpg'
import slider3 from '../../assets/sliderMain/3.jpg'
import slider4 from '../../assets/sliderMain/4.jpg'
import slider5 from '../../assets/sliderMain/5.jpeg'
import slider6 from '../../assets/sliderMain/6.jpeg'
import slider7 from '../../assets/sliderMain/7.jpeg'
import slider8 from '../../assets/sliderMain/8.jpeg'




// Service 


// Main Slider 
export const slidesMain = [
  { image: slider1, content: 'This is the first slide' },
  { image: slider2, content: 'This is the second slide' },
  { image: slider3, content: 'This is the third slide' },
  { image: slider4, content: 'This is the third slide' },
  { image: slider5, content: 'This is the third slide' },
  { image: slider6, content: 'This is the third slide' },
  { image: slider7, content: 'This is the third slide' },
  { image: slider8, content: 'This is the third slide' },
];

export const settingsMainSlider = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />
};



// Products 
// =================================
export const settingsProductsSlider = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  spaceBetween: 16,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <ArrowBackIosNewIcon />,
  nextArrow: <ArrowForwardIosIcon />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const slidesProducts = [
  // Fertilizer 
  { id: '101', image: p1, title: '22x16', link: '/', content: 'Kota Stone Size 22X16 Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '102', image: p2, title: '2x2', link: '/', content: 'Kota Stone Size 2x2 Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '103', image: p3, title: '22x11', link: '/', content: 'Kota Stone Size 22x11 Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '104', image: p4, title: '2x2 uncut', link: '/', content: 'Kota Stone Size 2x2 uncut Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '105', image: p5, title: '23x23', link: '/', content: 'Kota Stone Size 23x23 Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '106', image: p6, title: '22x22', link: '/', content: 'Kota Stone Size 22X11 Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '107', image: p22x46, title: '22x46', link: '/', content: 'Kota Stone Size 22X46 Thickness available 30mm' },
  { id: '108', image: red, title: 'Red Mandana all size', link: '/', content: 'Red mandana all sizes available thickness 18 to 25mm and 25to 30mm' },
  { id: '109', image: green_kota_stone, title: 'Green Kota Stone', link: '/', content: 'Green Kota Stone Thickness available 18mm to 25mm and 25mm to 32mm' },
  { id: '110', image: mirror_polish_kota_stone, title: 'Mirror Polish Kota Stone', link: '/', content: 'Mirror Polish Kota Stone Thickness available 18mm to 25mm and 25mm to 32mm' },
];




// export const ourNumberData = [
//   { title: 'Locations Pan India', count: 180, icon: <NearMeIcon /> },
//   { title: 'Artists & Technicians', count: 400, icon: <NearMeIcon /> },
//   { title: 'Decades of Experience', count: 3, icon: <HourglassTopIcon /> },
//   { title: 'Global Awards Won', count: 15, icon: <NearMeIcon /> },
// ];

export const aboutUsData = [
  // {
  //     imgPosition: 'left',
  //     title: 'JOURNEY SO FAR', 
  //     image: salon,
  //     description: ['Beauty Bee Salon Pvt. Ltd. was founded 3 Decades ago with the aim of providing world-class salon experience to clients. The brand is managed by Mr. Sumit Israni, Celebrity Hair Stylist and Managing Director, Beauty Bee Salon Pvt. Ltd.']
  // },
  {
    imgPosition: 'right',
    title: 'Organic Bio Fertilizer',
    image: aboutImg,
    description: ['Largely most of the farmers know that soil health is critical to their business.', '"We are not treating the plant, we are treating the soil. We feel if you treat the soil right and if you take care of the soil, your crops will definitely rise"']
  },
];




// Vision Mission Tab 
// -----------------------------------------
export const tabsVisionMissoin = [
  {
    icon: <ModeStandbyIcon />,
    title: 'Mission',
    id: 0,
  },
  {
    icon: <VisibilityIcon />,
    title: 'Vision',
    id: 1,
  },
  {
    icon: <CheckBoxIcon />,
    title: 'Motto',
    id: 2,
  },
  {
    icon: <CheckBoxIcon />,
    title: 'Objectives',
    id: 3,
  },
];

export const tabsContentVisionMissoin = [
  {
    id: 0,
    title: 'Our Mission',
    detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
  },
  {
    id: 1,
    title: 'Our Vision',
    detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
  },
  {
    id: 2,
    title: 'Our Motto',
    detail: ['"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."']
  },
  {
    id: 3,
    title: 'Objectives of Organic Farming',
    style: 'decimal',
    detail: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.']
  },
];






// Why Choose GROW MORE ?
export const WhyChooseData = [
  { icon: <ThumbUpIcon />, title: 'World-Class Quality' },
  { icon: <AccessAlarmsIcon />, title: 'Timely Delivery' },
  { icon: <NearMeIcon />, title: 'Modern Technology' },
  { icon: <CurrencyRupeeIcon />, title: 'Affordable Prices' },
  { icon: <PersonIcon />, title: 'Customer Support' },
  { icon: <LocationOnIcon />, title: 'Wide Distribution Network' },
  { icon: <LocalShippingIcon />, title: 'Strong Logistics Support' },
  { icon: <CheckBoxIcon />, title: 'Reliable & Trusted Services' },

];