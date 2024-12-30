import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
  cardWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
    },
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '350px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    padding: '10px',
    textAlign: 'center',
    background: '#fff',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#333',
    marginBottom: '8px',
    textDecoration: 'none',
    '&:hover': {
      color: '#007BFF',
    },
  },


  cardWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    margin: '10px', // Add spacing between cards
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.15)',
    },
  },
}));

const CarouselCard = ({ slide, spacing = '16px' }) => {
    const classes = useStyles();
  
    return (
      <Link to={slide.link} style={{ textDecoration: 'none', margin: spacing }}>
        <Box className={classes.cardWrapper}>
          <Box className={classes.imageContainer}>
            <img src={slide.image} alt={slide.title} className={classes.image} />
          </Box>
          <Box className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              {slide.title}
            </Typography>
          </Box>
        </Box>
      </Link>
    );
  };
  

export default CarouselCard;
