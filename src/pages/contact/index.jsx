import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Container1200 } from '../../components/shared/CustomContainer';
import { useStyles } from './contact.style';
import ContactForm from './ContactForm';

const Contact = () => {
  const classes = useStyles();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        scroll: 'smooth',
      });
    };

    scrollToTop();
    return () => { };
  }, []);

  return (
    <>
      <Box className={classes.productsSliderStyle + ' ' + 'pb-7'}>

        {/* <TitleSection title={"Feel free to contact us"} className={"productTitle"} /> */}
        <Container1200 className={'pt-12 pb-6 lg:px-0 px-2'}>
          <h1 className='text-4xl font-semibold mb-6'>Feel free to contact us</h1>
          <Grid container spacing={5}>
            <Grid item lg={5} xs={12}>

              {/* Left Column: Address Section */}
              <div className=" w-full mb-8 lg:mb-0">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Registered office</h2>
                  <h5 className='font-medium'>Mr.Naresh Kumar Meena (Raju Bhai)</h5>
                  <p className="mb-4">
                    Nimana Road Vill. Mayla <br />Ramganjmandi Dist. Kota <br />Rajasthan
                  </p>

                  {/* <h2 className="text-2xl font-semibold mb-4">Branch office</h2>
                  <p className="mb-4">
                    Palace road, Rajkot,
                    <br />
                    Gujarat 360001
                  </p> */}

                  <p className="mb-4" >
                    <strong>Phone: </strong>
                    <a className='' href="tel:+919829545808">+91 9829545808</a>  &nbsp; / &nbsp;
                    <a href="tel:+919414191888">+91 9414191888</a>
                  </p>

                  <p className="mb-4">
                    <strong>Email:</strong> <a href="mailto:stoneshekhar@gmail.com">stoneshekhar@gmail.com</a>
                  </p>
                  <p className="mb-4">
                    <strong>Business Hours:</strong>
                    <br />
                    Monday - Sunday: 9:30 AM to 7:00 PM
                  </p>
                </div>
              </div>



            </Grid>
            <Grid item lg={7} xs={12}>
              {/* Right Column: Contact Form */}
              <div className="w-full">
                <ContactForm />
              </div>
            </Grid>
          </Grid>
        </Container1200>
      </Box>
    </>
  );
};

export default Contact;
