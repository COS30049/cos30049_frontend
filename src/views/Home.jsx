import React from "react";
import { Typography, Container } from "@mui/material";
import AssetsWrapper from "../components/AssetsWrapper";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <>
            <SearchBar />
            <Container disableGutters sx={{  justifyContent: 'space-between' }} maxWidth={false}
            >
                <AssetsWrapper/>
            </Container>
        </>
    )
}