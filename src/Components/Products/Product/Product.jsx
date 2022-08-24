import React from 'react';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

import useStyles from './styles';
export const Product = ({ product }) => {

    const classes=useStyles();
  return (
 
   <Card className={classes.root}  >
    <CardMedia className={classes.media} component="img" image={product.image} title={product.name} />
    <CardContent>
        <div className={classes.cardContent}>

            <Typography variant="h5" gutterBottom>
                {product.name}
                   </Typography>
                   <Typography variant="h5">
                {product.price}
                   </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" >
            {product.description}

        </Typography>
        </CardContent>

        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart"></IconButton>
            <AddShoppingCart/>

        </CardActions>
   </Card>
   
  )
}

export default Product;
