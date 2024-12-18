import {
  Box,
  Button,
  Grid,
  TextField
} from '@mui/material';
import emailjs from 'emailjs-com';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { ButtonBorder } from '../../components/shared/ButtonCustom';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

const ContactForm = () => {

  const [isSubmitted, setIsSubmitted] = useState('');

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    const serviceID = '';
    const templateID = '';
    const userID = '';  //Public Key

    emailjs
      .send(serviceID, templateID, values, userID)
      .then((response) => {
        // alert('Thank you! Your message has been sent successfully.');
        setIsSubmitted('Submitted successfully, we will get back to you soon')
        resetForm();
        setSubmitting(false);
      })
      .catch((error) => {
        // alert('Failed to send the message. Please try again later.');
        setIsSubmitted('Failed to send the message. Please try again later.')
        setSubmitting(false);
      });
  };

  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

      {isSubmitted ?
        <p className='font-semibold text-green-600'>{isSubmitted}</p>
        : <p className='font-semibold text-red-600'>{isSubmitted}</p>}


      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  variant="outlined"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  variant="outlined"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonBorder
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ButtonBorder>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>

  );
};

export default ContactForm;
