// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.

import React from "react";
import {Grid} from "@mui/material";
import AssetsSlide from "./AssetsSlide";

//Mock up data
import assetsDataFile from "../mock/assets.json";
import theme from '../custom/theme';


//Read data from mock up file. if(backend == true) -> return "Call API using async + fetch"
const assetsData = assetsDataFile;
console.dir(assetsData);


const AssetsWrapper = ({query}) => {
    console.log(query);

    const filteredData = query? assetsData.filter(
        (data) => {
        if(data.price.toLowerCase().includes(query.toLowerCase()) || data.tag.toLowerCase().includes(query.toLowerCase()) || data.volume.toLowerCase().includes(query.toLowerCase()) || data.title.toLowerCase().includes(query.toLowerCase())) return data;
    }) : assetsData
    

    return (
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
                filteredData.map((assetsSlide) => ( //using .map() method to iterate over each element in assetwrapper. Each element will be stored as assetslide 
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