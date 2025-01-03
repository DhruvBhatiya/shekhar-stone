import { makeStyles } from "@mui/styles";
import { theme } from "../../theme";
// import visionBg from "../../assets/img/images/bg/vision-design.webp"
import productSlider from "../../assets/img/images/bg/product-bg.webp"
import whyChooseBg from "../../assets/bg/bg100.png"
import growMoreBgg from "../../assets/img/images/bg/bg-section-01.webp"
import { visionBg } from "../../Images";
import Colors from "../../Colors";
import productBg from "../../assets/bg/productBg.png"


export const useStyles = makeStyles(() => ({

    main_slider: {
        "& .slick-list": {
            height: '80vh'
        }
    },

    // Main Slider 
    mainSlide: {
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        //   height: '400px',
        backgroundColor: '#f5f5f5',
        borderRadius: theme.shape.borderRadius,
        //   boxShadow: theme.shadows[2],
        padding: theme.spacing(0),
    },

    bannerImg: {
        width: '100%',
        maxHeight: '400px',
    },


    ourCounter: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto',
        gridGap: '10px',

        "& .elementor-icon-box-wrapper": {
            textAlign: 'center'
        },
        "& .elementor-icon-box-title span": {
            "fontSize": "34px", "fontWeight": "400", "lineHeight": "28px", "letterSpacing": "-0.6px"
        },
        "& .elementor-icon-box-description": {
            "fontFamily": "\"Montserrat\", Sans-serif", "fontSize": "18px", "fontWeight": "400", "lineHeight": "30px",
            color: '#6c757d'
        },
        "& .MuiSvgIcon-root": {
            width: '31px',
            height: '31px',
            marginBottom: '12px'
        },
    },


    /* About us */
    aboutStyle: {
        marginBottom: '70px',
        padding: '50px 0'
    },
    leftImage: {
        display: 'flex',
        gridGap: '20px',
        flexDirection: 'row',
    },
    rightImage: {
        display: 'flex',
        gridGap: '20px',
        flexDirection: 'row-reverse',
    },
    imagesSec: {
        // width: '50%',
        "& img": {
            width: '100%'
        }
    },
    contentAbout: {
        width: '50%',

        "& .title": {
            "color": "#000000", "fontFamily": "\"Montserrat\", Sans-serif", "fontSize": "27px", "fontWeight": "400"
        },
        "& .description": {
            "color": "#000000", "fontFamily": "\"Montserrat\", Sans-serif", "fontWeight": "400", "lineHeight": "35px"
        },
    },


    // Testimonial 

    testimonial: {
        "& .MuiAvatar-root": {
            "margin": "0 auto",
            width: '130px',
            height: '130px',
            "background": "#c7c7c7",
        }
    },
    testiSliderStyle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        columnGap: '20px',
        textAlign: 'center',
        "minHeight": "290px",

        "& .MuiSvgIcon-root": {
            "color": "#80808036", "rotate": "180deg", "fontSize": "170px", "position": "absolute", "top": "30px",
            left: '28%'
        },

        "& .title": {
            fontSize: '1.25rem'
        },
        "& .description": {
            "color": "#767575", "fontFamily": "\"Montserrat\", Sans-serif", "fontWeight": "400", "lineHeight": "35px",
            "fontSize": "1.25rem", marginTop: '10px'
        },
    },
    brandBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px'
    },

    brandStyle: {
        "& .slick-next": {
            right: '5px',
            fill: '#000'
        },
        "& .slick-prev": {
            left: '-2px',
            fill: '#000'
        },

    },

    // Blog 

    blogStyleParent: {
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        // gridGap: '10px',
    },
    blogItem: {
        padding: '0 10px'
    },

    imagesSecBlog: {
        height: '277px',
        overflow: 'hidden',
        display: 'inline-block',

        "& img": {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.2)',
            },
        }
    },

    contentSec: {
        marginTop: '35px',


        "& .title": {
            fontSize: '1.5rem',


            '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer'
            },
        },
        "& .description": {
            "color": "#767575", "fontSize": "15px", "marginBottom": "0", "fontFamily": "'Montserrat'"
        },
    },


    headingWithLine: {
        "& .servece_0111": { "position": "relative", "height": "5px", "width": "65px", "borderRadius": "8px", "backgroundColor": `${Colors.brightSkyBlue}`, "display": "block", }
    },

    growMoreBg: {
        "backgroundColor": "#fff", "padding": "80px 0 50px 0",
        "backgroundImage": `url(${growMoreBgg})`,
        "backgroundRepeat": "no-repeat", "backgroundPosition": "center top"
    },


    home_welcome: {
        "& span": {
            "fontSize": "28px", "color": "#323232", "fontWeight": "100", "fontFamily": "'Oswald', sans-serif !important",
        },

        "& h1": {
            "fontSize": "40px", "fontWeight": "600", "color": `${Colors.blue}`, "textTransform": "uppercase", "marginBottom": "10px", "fontFamily": "'Oswald', sans-serif !important"
        },

        "& .tagline": { "fontSize": "20px !important", "fontStyle": "italic", "color": "#000 !important", "fontWeight": "400", "lineHeight": "32px !important", "textAlign": "left !important" }
    },


    counterBg: {

        "& .counter-green": {
            backgroundColor: '#00663A',
            padding: '25px 0 !important',
            paddingLeft: '35px !important',

        },
        "& .counter-yellow": {
            backgroundColor: '#ffc000',
            padding: '15px !important',
        },
        "& .ct-counter-number": {
            "fontSize": "40px", "color": "#fff", "fontWeight": "700",
        },


    },



    visionMission: {
        "backgroundImage": `url(${visionBg})`,
        backgroundSize: 'cover',
        // backgroundColor: 'grey',
        backgroundPosition: '100% 30%',

        "backgroundRepeat": "no-repeat",
        // "backgroundPosition": "center top",

    },


    // Products 
    // =====================================
    productsSliderStyle: {

        "& .MuiBox-root":{
            marginTop: '0 !important',
        },


        "backgroundColor": "#ffc000",
        // "backgroundImage": `url(${process.env.REACT_APP_IMAGES_PATH}/images/bg/product-bg.webp)`,
        backgroundImage: `url(${productBg})`,
        backgroundSize: '100%',
        "backgroundAttachment": "fixed", "backgroundRepeat": "no-repeat", "backgroundPosition": "center",

        "& .slick-dots": {
            bottom: '-20px !important'
        },

        "& .prod-img": {
            "overflow": "hidden", "border": "5px solid rgb(127 194 65)", "backgroundColor": "#FFF", "marginLeft": "5px", "marginRight": "5px",
            padding: '15px',
            height: '220px',
            display: 'flex',
        },

        "& .productTitle": {
            "& .subTitle": {
                "fontFamily": "'Oswald', sans-serif !important", "fontSize": "40px", "fontWeight": "600", "color": "#fff", "textTransform": "uppercase", "marginTop": "5px", "textAlign": "center"
            }
        },
        "& .servece-0111": {
            "backgroundColor": `${Colors.brightSkyBlue}`, "margin": "10px auto 15px auto", "position": "relative", "height": "5px", "width": "65px", "borderRadius": "8px", "display": "block"
        },

        "& .content-sec": {
            backgroundColor: '#ffc000',
            "padding": "8px 15px",
            "textAlign": "center",
            margin: '0 5px',
            height: '70px',

            "& .title": {
                "color": "#333", "fontSize": "19px", "fontWeight": "600", "lineHeight": "27px",
            },


        }
    },


    whyChooseStyle: {
        "padding": "70px 0 70px 0",
        "backgroundImage": `url(${whyChooseBg})`,
        "backgroundRepeat": "no-repeat", "backgroundPosition": "center -250px", "backgroundSize": "cover",

        "& .whyChooseBox": {
            "backgroundColor": "#f7f8f8", "padding": "0", "textAlign": "center", "marginTop": "40px", "borderRadius": "5px", "boxShadow": "0 6px 9px rgb(0 0 0 / 6%)",

            "& .title": {
                "fontSize": "18px", "color": "#191c22", "fontWeight": "500", "padding": "20px 10px 30px 10px", "margin": "0", "lineHeight": "28px"
            },

            "& .list-icon": {
                "& svg": {
                    "color": `#939597`, "textAlign": "center", "fontSize": "50px !important", "lineHeight": "75px !important", "borderRadius": "100px", "border": "4px solid #f7f8f8", "height": "82px", "width": "82px", "marginTop": "-40px", "backgroundColor": "#fff",
                    padding: '12px', boxShadow: '0 4px 20px 0 #0000002e'
                }
            }
        }
    },




    // ====================================
    // ====================================
    [theme.breakpoints.down('md')]: {
        main_slider: {
            "& .slick-list": {
                height: '31vh'
            }
        },

        ourCounter: {
            gridTemplateColumns: 'auto auto',
            gap: '20px'
        },
        leftImage: {
            flexDirection: 'column',
        },
        rightImage: {
            flexDirection: 'column',
        },
        imagesSec: {
            width: '100%',
        },
        contentAbout: {
            width: '100%'
        },
        blogStyleParent: {
            gridTemplateColumns: 'auto',
            gridGap: '50px',
            marginTop: '30px',
            gridRowGap: "0"

        },
        contentSec: {
            marginTop: '15px',
        },
        imagesSecBlog: {
            height: 'auto',
        },
        testiSliderStyle: {
            minHeight: '280px'
        },
    }

}));