import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GridViewIcon from '@mui/icons-material/GridView';


export default function CardMui({ db, index }) {
    return (
        <Card key={index} sx={{ maxWidth: '100%', margin: '0 10px' }}>
            <CardMedia
                sx={{ height: 350 }}
                image={db.image}
                title={db.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {db.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {db.content && db.content}
                </Typography>
            </CardContent>
            <CardActions sx={{paddingTop: 0}}>
                <Button className='w-1/2' variant="outlined" endIcon={<ShoppingCartIcon />}>
                    Order Now
                </Button>
                <Button className='w-1/2' variant="outlined" endIcon={<GridViewIcon />}>
                    View More
                </Button>
            </CardActions>
        </Card>
    );
}
