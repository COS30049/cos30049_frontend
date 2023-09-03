import React from "react";
import {Grid} from "@mui/material";
import Product from "./Product";

const products = [
    {id: 1, name: 'usr-1', description: '3 ETH', price: '$300'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
    {id: 1, name: 'usr-2', description: '1 ETH', price: '$100'},
]

const Products = () => {

    return(
        <main>
        <Grid container justify= "center" spacing={4}>
            {
                products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={8} md={4} lg={2}>
                        <Product product = {product}/>
                    </Grid>
                ))
            }
        </Grid>
        </main>
    )
}
export default Products