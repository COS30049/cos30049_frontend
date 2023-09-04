import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='./images/Ethereum-ETH-Logo.png' title={product.name} />
        <CardContent>
            <div>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
            </div>
            <div className={classes.cardContent}>
            <Typography variant="h5" color="textSecondary">
                    {product.description}
            </Typography>
            <Typography variant="h5">
                    {product.price}
                </Typography>

            </div>

        </CardContent>
        {/* <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add To Cart">
                <AddShoppingCart/>
            </IconButton>
        </CardActions> */}
    </Card>
  )
}

export default Product