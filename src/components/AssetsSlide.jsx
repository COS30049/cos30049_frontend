
// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.
import React from 'react';
import { Card,CardMedia, CardContent, Typography, Box, ThemeProvider } from '@mui/material';
import theme from '../custom/theme';

const cardRootStyle = {
    height: '325px',
    width: '300px',
    borderRadius: '20px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    justifyContent: 'space-evenly',
    boxSizing: "border-box",
};

const cardThumbStyle = {
    height: '200px',
    width:'300px',
    objectFit: 'contain',
    justifyContent: 'center',
    paddingTop: '50%',
    backgroundColor: 'rgb( 228, 228, 228 )',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
};

const cardContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const AssetsSlide = ({assetsSlide}) => {
  return ( 
    // The reference code use Card, but here I use Box due to some inconvenience when using Card
    // With Box, I can use shadow and border easier
    <ThemeProvider theme={theme}>
        <Box sx={ cardRootStyle }>
            <CardMedia sx={ cardThumbStyle } image="" title={assetsSlide.title} component={"div"}/>
            <CardContent>
                <Box>
                    <Typography variant="h5" gutterBottom fontSize={20}> {/*Using gutterBottom to add margin to the bottom of the title*/}
                        {assetsSlide.title}
                    </Typography>
                </Box>
                <Box sx={ cardContentStyle }>
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
                </Box>
            </CardContent>
        </Box>
    </ThemeProvider>
  )
}

export default AssetsSlide