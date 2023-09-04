import React from "react";
import { Typography, Container } from "@mui/material";
import AssetsWrapper from "../components/AssetsWrapper";
import SearchBar from "../components/SearchBar";
import makeStyles from '../components/styles';

export default function Home() {
    const classes = makeStyles();
    return (
        <>
            <SearchBar />
            <Container disableGutters className={classes.cardAllign} maxWidth={false}
            >
                <AssetsWrapper/>
            </Container>
        </>
    )
}