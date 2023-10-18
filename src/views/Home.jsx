import React, {useState} from "react";
import { Typography, Container, Box } from "@mui/material";
import AssetsWrapper from "../components/AssetsWrapper";
import SearchBar from "../components/SearchBar";
import makeStyles from '../components/styles';

export default function Home() {
    const classes = makeStyles();

    const [query, setQuery] = useState("");

    //This callback is use to get the value from SearchBar <input>
    /* Actually I prefer using ref, but cannot imagine how ref works in this case
    So I use useState hook and callback instead*/
    let getQueryCallback = (data) => {
        // console.log(data);
        setQuery((prev) => data);
    }

    return (
        <Container disableGutters maxWidth={false} sx={{my: "2rem"}}>  
            <Typography variant='h4'>Trading</Typography>
            <Box sx={{
                width: "100%",
                my: "2rem",
                display: "block"
            }}>
                <SearchBar exportQuery={getQueryCallback}/>
            </Box>
            <Container disableGutters className={classes.cardAllign} maxWidth={false}
            >
                <AssetsWrapper query={query}/>
            </Container>
        </Container>
    )
}