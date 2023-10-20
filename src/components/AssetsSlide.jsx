
// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.
import React, { useState }  from 'react';
import { CardMedia, CardContent, Typography, Box, ThemeProvider, Chip } from '@mui/material';
import useStyles from './styles'
import theme from '../custom/theme';

import { AssetDetailsModal } from "./Modals";

function AssetsSlide({assetsSlide}) {
    const imgPath = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
    const classes = useStyles();

    const [detailsOpen, setDetailsOpen] = useState(false);
    
    const popupDetails = (event) => {
        setDetailsOpen(true)
    }

    return ( 
        // The reference code use Card, but here I use Box due to some inconvenience when using Card
        // With Box, I can use shadow and border easier
        <ThemeProvider theme={theme}>
            <Box className={classes.root} onClick={popupDetails}>
                <CardMedia className={classes.media} image={imgPath} title={assetsSlide.title} component={"div"}/>
                <CardContent>
                    <div>
                        <Typography variant="h5" gutterBottom fontSize={20}> {/*Using gutterBottom to add margin to the bottom of the title*/}
                            {assetsSlide.name}
                        </Typography>
                    </div>
                    <div className={classes.cardContent}>
                        <Box component={"div"} sx={{width: "50%"}}>
                            <Typography variant="h5" color="text" fontSize={15}> 
                                Volume
                            </Typography>
                            <Typography fontWeight={500} variant="h5" color="text" fontSize={15}>
                                {assetsSlide.volume}
                            </Typography>
                        </Box>
                        <Box component={"div"} sx={{width: "50%"}}>
                            <Typography variant="h5" fontSize={15} >
                                Price
                            </Typography>
                            <Typography fontWeight={500} variant="h5" color="text" fontSize={15}>
                                    {assetsSlide.floor_price}
                            </Typography>
                        </Box>
                        <Box component={"div"}>
                            <Chip label={assetsSlide.category} color="info" fontSize={15}/>
                        </Box>
                    </div>
                </CardContent>
            </Box>
            <AssetDetailsModal open={detailsOpen} setDetailsOpen={setDetailsOpen}
                asset={assetsSlide}
                imgPath={imgPath}
            />
        </ThemeProvider>
    )
}


export default AssetsSlide