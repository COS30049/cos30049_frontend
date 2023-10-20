// Notice: Parts of the code were referenced from https://www.youtube.com/watch?v=377AQ0y6LPA.
// However, I will add some comments to show what I understand when referencing the code from it.

import React, { useEffect, useState } from "react";
import {Grid} from "@mui/material";
import AssetsSlide from "./AssetsSlide";
import getAssets from "../api/getAssets";

//Mock up data
import theme from '../custom/theme';

function AssetsWrapper({query}) {
    //Read data from mock up file. if(backend == true) -> return "Call API using async + fetch
    const [assetsData, setAssetsData] = useState([]);

    useEffect(() => {
        getAssets()
        .then(resp => resp.data)
        .then(data => {
            console.log(data);
            setAssetsData(data);
        })
        .catch((err) => {
            console.error(err)
        })
    }, [])

    const filteredData = query == ""? assetsData : assetsData.filter((data) => {
        if(data.floor_price.toLowerCase().includes(query.toLowerCase()) || data.category.toLowerCase().includes(query.toLowerCase()) || data.volume.toLowerCase().includes(query.toLowerCase()) || data.name.toLowerCase().includes(query.toLowerCase())) return data;
    })
    

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
                    <Grid item key={assetsSlide.asset_id} xs={12} sm={6} md={4} lg={3} marginTop={6}>
                        <AssetsSlide assetsSlide={assetsSlide}/> 
                    </Grid>
                ))
            }
        </Grid>
        </>
    )
}
export default AssetsWrapper