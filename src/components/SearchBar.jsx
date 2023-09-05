import { Box, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

export default function SearchBar() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    display: '-ms-flexbox',
                    display: '-webkit-flex',
                    alignItems: 'center',
                    px: "20px",
                    py: "2px",
                    borderRadius: "30px",
                    border: "0.5px solid #707070",
                    gap: '20px',
                }}
            >
                <Search
                />
                <InputBase fullWidth placeholder="Search"
                    sx={{
                        border: 'none',
                        backgroundColor: "#FFFFFF",
                        outline: 'none',
                        fontSize: '18px',
                        "& input": {
                            py:"5px",
                        }
                    }}
                />
            </Box>
        </>
    )
}