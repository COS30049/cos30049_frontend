// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.

import React from "react";
import {Grid} from "@mui/material";
import AssetsSlide from "./AssetsSlide";
import {useMediaQuery} from "@mui/material";

//Mock up data
import assetsDataFile from "../mock/assets.json";
import { useTheme } from "@mui/styles";

const assetsData = assetsDataFile;
console.dir(assetsData);

// const assetswrapper = [ //Creating an array for assetwrapper, each of the element will be import to each asset slide
//     {id: 1, title: "NFT Asset 1", volume: '0.123456 ETH', floorprice: '0.001234 ETH'},
//     {id: 2, title: 'NFT Asset 2', volume: '0.987654 ETH', floorprice: '0.000567 ETH'},
//     {id: 3, title: 'NFT Asset 3', volume: '0.876543 ETH', floorprice: '0.000123 ETH'},
//     {id: 4, title: 'NFT Asset 4', volume: '0.765432 ETH', floorprice: '0.000987 ETH'},
//     {id: 5, title: 'NFT Asset 5', volume: '0.654321 ETH', floorprice: '0.000234 ETH'},
//     {id: 6, title: 'NFT Asset 6', volume: '0.543210 ETH', floorprice: '0.000876 ETH'},
// ]


const AssetsWrapper = () => {
    const theme = useTheme();

    return(
        <>
        <Grid

        sx={{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "2%",
            [theme.breakpoints.down('md')]: {
                justifyContent: "space-evenly",
            }
        }}
        >
            {
                assetsData.map((assetsSlide) => ( //using .map() method to iterate over each element in assetwrapper. Each element will be stored as assetslide 
                    <Grid item key={assetsSlide.id} xs={12} sm={6} md={4} lg={3} marginTop={6}>
                        <AssetsSlide assetsSlide={assetsSlide}/> 
                    </Grid>
                ))
            }
        </Grid>
        </>
    )
}
export default AssetsWrapper