
// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.
import React from 'react';
import { Card,CardMedia, CardContent, Typography, Box, ThemeProvider } from '@mui/material';
import useStyles from './styles'
import theme from '../custom/theme';
const AssetsSlide = ({assetsSlide}) => {
    const classes = useStyles();
  return ( 
    // The reference code use Card, but here I use Box due to some inconvenience when using Card
    // With Box, I can use shadow and border easier
    <ThemeProvider theme={theme}>
        <Box className={classes.root}>
            <CardMedia className={classes.media} image="" title={assetsSlide.title} component={"div"}/>
            <CardContent>
                <div>
                    <Typography variant="h5" gutterBottom fontSize={20}> {/*Using gutterBottom to add margin to the bottom of the title*/}
                        {assetsSlide.title}
                    </Typography>
                </div>
                <div className={classes.cardContent}>
                    <Box component={"div"}>
                        <Typography variant="h5" color="text" fontSize={15}> 
                            Volume
                        </Typography>
                        <Typography fontWeight={500} variant="h5" color="text" fontSize={15}>
                            {assetsSlide.volume}
                        </Typography>
                    </Box>
                    <Box component={"div"}>
                        <Typography variant="h5" fontSize={15} >
                            Floor Price
                        </Typography>
                        <Typography fontWeight={500} variant="h5" color="text" fontSize={15}>
                                {assetsSlide.floorPrice}
                        </Typography>
                    </Box>
                </div>
            </CardContent>
        </Box>
    </ThemeProvider>
  )
}

export default AssetsSlide