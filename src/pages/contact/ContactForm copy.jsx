import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
import emailjs from 'emailjs-com';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { ButtonBorder } from '../../components/shared/ButtonCustom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import MailIcon from '@mui/icons-material/Mail';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  // subject: Yup.string().required('Subject is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
  attachment: Yup.mixed()
    .test('fileSize', 'File size is too large', (value) =>
      value ? value.size <= 2 * 1024 * 1024 : true // 2MB limit
    )
    .notRequired(),
});

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // Tracks success or error

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const sendEmail = (values, { setSubmitting, resetForm }) => {
    const serviceID = '';
    const templateID = '';
    const userID = ''; // Public Key

    const emailData = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      // subject: values.subject,
      message: values.message,
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(() => {
        setModalMessage('Submitted successfully, we will get back to you soon.');
        setIsSuccess(true);
        setIsModalOpen(true);
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setModalMessage('Failed to send the message. Please try again later.');
        setIsSuccess(false);
        setIsModalOpen(true);
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
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobile: '',
          // subject: '',
          message: '',
          attachment: null,
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ errors, touched, setFieldValue, values, isSubmitting }) => (
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
                  name="mobile"
                  label="Mobile Number"
                  variant="outlined"
                  error={touched.mobile && Boolean(errors.mobile)}
                  helperText={touched.mobile && errors.mobile}
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
              {/* {values.subject === 'Upload your documents' && (
                <Grid item xs={12}>
                  <input
                    type="file"
                    accept="application/pdf,image/*"
                    onChange={(event) =>
                      setFieldValue('attachment', event.currentTarget.files[0])
                    }
                  />
                  {errors.attachment && touched.attachment && (
                    <p className="text-red-600 text-sm">{errors.attachment}</p>
                  )}
                </Grid>
              )} */}
              <Grid item xs={12}>
                {/* <ButtonBorder
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </ButtonBorder> */}

                <Button  type="submit" variant="outlined" endIcon={<MailIcon />}  disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
        // sx={{
        //   bgcolor: isSuccess ? 'lightgreen' : 'red',
        //   color: '#fff',
        //   textAlign: 'center',
        // }}
        >
          {isSuccess ? <div className='flex items-center text-green-600 gap-2'>Thank You <CheckCircleOutlineIcon /></div> : <div className='flex items-center text-red-600 gap-2'>Error</div>}
        </DialogTitle>
        <DialogContent
        // sx={{
        //   bgcolor: isSuccess ? 'lightgreen' : 'red',
        //   color: '#fff',
        // }}
        >
          <DialogContentText id="alert-dialog-description"
            sx={{
              color: isSuccess ? 'black' : 'red',
            }}
          >
            {modalMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions
        // sx={{
        //   bgcolor: isSuccess ? 'green' : 'red',
        //   justifyContent: 'center',
        // }}
        >
          <Button
            onClick={handleCloseModal}
            variant="contained"
          // sx={{
          //   bgcolor: '#fff',
          //   color: isSuccess ? 'green' : 'red',
          // }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;
