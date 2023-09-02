import React from "react";
import { Typography, Container } from "@mui/material";
import AssetsWrapper from "../components/AssetsWrapper";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <>
            <Typography variant="p">Hello World</Typography>
            <SearchBar />
            <Container
                sx={{
                    px:"100px",
                }}
            >
                <AssetsWrapper />
            </Container>
            
        </>
    )
}