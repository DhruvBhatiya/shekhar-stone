import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    cardWrapper: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        '&:hover $image': {
            transform: 'scale(1.1)',
        },
    },
    imageContainer: {
        overflow: 'hidden',
    },
    image: {
        transition: 'transform 0.3s ease',
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    content: {
        padding: '16px',
        textAlign: 'center',
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#333',
        textDecoration: 'none',
        '&:hover': {
            color: '#007BFF',
        },
    },
});

const CardHoverZoom = ({ data }) => {
    const classes = useStyles();


    return (
        <>
            {
                data.map((db, index) => (
                    <Box key={index} className={classes.cardWrapper}>
                        <Box className={classes.imageContainer}>
                            <Link to={db.link}>
                                <img
                                    src={db.image}
                                    alt={db.title}
                                    className={classes.image}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </Link>
                        </Box>
                        <Box className={classes.content}>
                            <Link to={db.link} className={classes.title}>
                                <Typography variant="h6">{db.title}</Typography>
                            </Link>
                        </Box>
                    </Box>
                ))
            }
        </>
    );
};

export default CardHoverZoom;
