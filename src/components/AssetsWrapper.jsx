import React from "react";
import { Grid, CssBaseline, Pagination } from "@mui/material";
import Product from "./AssetsContainer";

const products = [
    {id: 1, name: 'usr-1', description: '3 ETH', price: 'ETH 300'},
    {id: 1, name: 'usr-3', description: '1 ETH', price: 'ETH 100'},
    {id: 1, name: 'usr-4', description: '1 ETH', price: 'ETH 100'},
    {id: 1, name: 'usr-5', description: '1 ETH', price: 'ETH 100'},
    {id: 1, name: 'usr-6', description: '1 ETH', price: 'ETH 100'},
    {id: 1, name: 'usr-7', description: '1 ETH', price: 'ETH 100'},
    {id: 1, name: 'usr-8', description: '1 ETH', price: 'ETH 100'},
]

const Products = () => {

    return(
        <>
            <CssBaseline />
            <Grid container justify= "center" spacing={4}>
                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={8} md={4} lg={2}>
                            <Product product = {product}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Pagination
                    count={10}
                    sx={{display: "flex", mx: "auto", justifyContent:"center"}}
            />
        </>
    )
}
export default Products