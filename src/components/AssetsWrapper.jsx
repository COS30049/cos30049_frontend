import React from "react";
import AssetsSlide from "./AssetsSlide";
import { CssBaseline, Grid, Pagination, Typography } from "@mui/material";

export default function AssetsWrapper() {
    return (
        <>
            <CssBaseline />
            <AssetsSlide />
            <Pagination />
        </>
        
    )
}