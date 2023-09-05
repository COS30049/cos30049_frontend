import React, {useState} from "react";
import { Typography, Container, Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import TxnTable from "../components/TxnTable";

export default function Txnhistory() {
    const [query, setQuery] = useState("");

    //This callback is use to get the value from SearchBar <input>
    /* Actually I prefer using ref, but cannot imagine how ref works in this case
    So I use useState hook and callback instead*/
    let getQueryCallback = (data) => {
        // console.log(data);
        setQuery((prev) => data);
    }

    return (
        <>
            <Container maxWidth={false} disableGutters sx={{my: "2rem"}}>
                <Typography variant='h4'>Transaction History</Typography>
                <Box 
                    sx={{
                        width: "100%",
                        my: "2rem",
                        display: "block"
                    }}
                >
                    <SearchBar exportQuery={getQueryCallback}/>
                </Box>
                <TxnTable query={query}/>
            </Container>
        </>
    )
}