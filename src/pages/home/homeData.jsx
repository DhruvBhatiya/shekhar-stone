
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



// Service 

import { nobanner, noImage, slider1, slider2, slider3, slider5, } from '../../Images';

// Main Slider 
export const slidesMain = [
  { image: slider1, content: 'This is the first slide' },
  { image: slider2, content: 'This is the second slide' },
  { image: slider3, content: 'This is the third slide' },
];
// Main Slider Setting 
// export const settingsMainSlider = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   autoplay: true,
// };
// Main Slider Setting 
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



// Our Services 
// export const productData = [
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   {
//     image: noImage,
//     title: 'Lorem ipsum',
//     link: '/'
//   },
//   // {
//   //   image: bioStimulants,
//   //   title: 'Soil Application for Bio Fertilizers',
//   // },
// ];


// Products 
// =================================
export const settingsProductsSlider = {
  dots: true,
  infinite: true,
  speed: 5000,
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
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
  { image: p1, title: '22x22', link: '/' },
  { image: p2, title: '16x16', link: '/' },
  { image: p3, title: '22x16', link: '/' },
  { image: p4, title: '2x2 uncut', link: '/' },
  { image: p5, title: '23x23', link: '/' },
  { image: p6, title: '22x11', link: '/' },
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

// Testimonial Slider Setting 
// export const settingsTestiSlider = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: false,
//   autoplay: true,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };
// Testimonial Data
// export const testimonialsData = [
//   {
//     image: team4,
//     title: 'Madhulika Sharma',
//     description: ["As someone who's always struggled with hair color, I was nervous about trying something new. But this salon's team of experts put me at ease. My hair has never looked so beautiful and vibrant!"]
//   },
//   {
//     image: team3,
//     title: "Anisha Sharma",
//     description: ["I'm a total skeptic when it comes to haircuts, but this salon blew me away. I went in for a simple trim and left with a stylish, modern haircut that completely transformed my look."]
//   },
//   {
//     image: team2,
//     title: "Ankur Aggarwal",
//     description: ["I've been getting my haircuts at this salon for years, and I can't imagine going anywhere else. The stylists here always give me the perfect cut that suits my face shape and style."]
//   },
//   {
//     title: "Jessica Arora",
//     description: ["The haircuts here are consistently top-notch, and their attention to detail is unmatched. Plus, the face care treatments are a fantastic way to relax and rejuvenate. I feel like a new person every time I leave."]
//   },
//   {
//     image: team1,
//     title: "Gourav Arora",
//     description: ["I can't express how grateful I am to have found this salon. The hairstylists here are not only incredibly talented but also friendly and welcoming."]
//   },

// ];

// Partner Brands Slider Setting 
// export const settingsPartnerBrandsSlider = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 5,
//   arrows: true,
//   autoplay: true,
//   prevArrow: <ArrowBackIosNewIcon />,
//   nextArrow: <ArrowForwardIosIcon />,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     }
//   ]
// };
{/* Partner Brands */ }
// export const partnerBrandsData = [
//   { image: alga },
//   { image: allmaleinc },
//   { image: dyson },
//   { image: footlogix },
//   { image: innoluxe },
//   { image: kanpeki },
//   { image: kerastase },
//   { image: loreal },
//   { image: thalgo },
// ];

// Our Blog 
// export const blogData = [
//   {
//     image: blog1,
//     title: 'Beauty Bee Salon: Where Expertise Meets Exceptional Haircuts',
//     description: ["Beauty Bee Salon stands as a beacon of excellence in the world of hair care."]
//   },
//   {
//     image: blog2,
//     title: "Beauty Bee Salon: Elevate Your Look with Stunning Hair Color",
//     description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
//   },
//   {
//     image: blog3,
//     title: "Beauty Bee Salon: Crafting Timeless Bridal Elegance",
//     description: ["Renowned for its expertise in hair care and styling, is the perfect destination to elevate your look with stunning hair color."]
//   },
// ];




// export const counterData = [
//   {
//     icon: <CalendarMonthIcon className="h-6 w-7" />,
//     count: 2017,
//     title: 'Lorem ipsum',
//   },
//   {
//     icon: <GroupsIcon className="h-6 w-7" />,
//     count: 15,
//     title: "Lorem ipsum",
//   },
//   {
//     icon: <HomeWorkIcon className="h-6 w-7" />,
//     count: 2,
//     title: "Lorem ipsum",
//   },

// ];


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