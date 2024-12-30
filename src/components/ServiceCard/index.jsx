import { Badge, Box } from '@mui/material';
import React from 'react';
import { useStyles } from './ServiceCard.style';
import { Link } from 'react-router-dom';

const ServiceCard = ({ data }) => {
    const classes = useStyles();

    return (
        <>

            {/* {data.map((db, index) => (
                <Box key={index} className={classes.serviceItem + ' ' + 'serviceClassName'}>
                    <Box className={classes.imagesSecService + ' ' + 'serviceImageClassName'}>
                        {db.badge ?
                            <Badge color="secondary" badgeContent={db.badge + '%'} max={db.badge + '%'}>
                                <img src={db.image} alt="" />
                            </Badge>
                            : <img src={db.image} alt="" />}
                            
                        <Link to={db.link}>
                            <Box className={'contentSec'}>
                                <h2 className="title">{db.title}</h2>
                            </Box>
                        </Link>
                    </Box>

                </Box>
            ))} */}


            {data.map((db, index) => (
                <Box key={index} className={classes.serviceItem + ' ' + 'serviceClassName'}>
                    <Box className={classes.imagesSecService + ' ' + 'serviceImageClassName'}>
                        {db.badge ?
                            <Badge color="secondary" badgeContent={db.badge + '%'} max={db.badge + '%'}>
                                <img src={db.image} alt="" />
                            </Badge>
                            :

                            <img src={db.image} alt="" />}

                        <Link to={db.link}>
                            <Box className={'contentSec'}>
                                <h2 className="title">{db.title}</h2>
                            </Box>
                        </Link>

                    </Box>

                </Box>
            ))}



        </>
    )
}

export default ServiceCard
