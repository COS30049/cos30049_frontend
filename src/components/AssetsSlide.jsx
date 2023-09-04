
// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.
import React from 'react';
import { Card,CardMedia, CardContent, Typography, Box } from '@mui/material';
import useStyles from './styles'
const AssetsSlide = ({assetsSlide}) => {
    const classes = useStyles();
  return ( // The reference code use Card, but here I use Box due to some inconvenience when using Card
            //With Box, I can use shadow and border easier
    <Box className={classes.root}>
        <CardMedia className={classes.media} image="" title={assetsSlide.title}/>
        <CardContent>
            <div>
                <Typography variant="h5" gutterBottom fontSize={20}> {/*Using gutterBottom to add margin to the bottom of the title*/}
                    {assetsSlide.title}
                </Typography>
            </div>
            <div className={classes.cardContent}>
                <Typography variant="h5" color="textSecondary" fontSize={15}> 
                    Volume<br />
                    {assetsSlide.volume}
                </Typography>
                <Typography variant="h5" fontSize={15} >
                    Floor Price<br />
                    {assetsSlide.floorPrice}
                </Typography>
            </div>
        </CardContent>
    </Box>
  )
}

export default AssetsSlide