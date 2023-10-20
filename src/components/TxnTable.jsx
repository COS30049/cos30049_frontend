import React, {useEffect, useState} from 'react';
import getTransactionHistory from '../api/getTransactionHistory';

import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody, TablePagination, TableFooter} from '@mui/material';
import { Details } from '@mui/icons-material';

const headColumn = ["#", "Method", "Block", "From", "To", "Amount", "Fee", "Age"];

//Use prop to get access to search features.
export default function TxnTable({query}) {
    const [page, setPage] = useState(0);
    const [TxnHistoryData, setTxnHistoryData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (e, newPage) => {
        setPage(newPage);
    }
    const changeRowPerpage = (e) => {
        setRowsPerPage(parseInt(e.target.value));
        setPage(0);
    }

    useEffect(() => {
        getTransactionHistory()
        .then(resp => resp.data)
        .then(data => {
            console.log(data);
            setTxnHistoryData(data)
        })
        .catch((error) => {
            console.error(error);
        });
    }, [])

    const getAge = (timestamp) => {
        // Convert the timestamp to a date object
        var date = new Date(timestamp);
        // Get the current time in milliseconds
        var now = new Date().getTime();
        // Calculate the difference in milliseconds
        var diff = now - date.getTime();
        // Check the difference and return the age in different units
        if (diff < 1000 * 60) {
            // Less than a minute, return in seconds
            return Math.floor(diff / 1000) + " seconds";
        } else if (diff < 1000 * 60 * 60) {
            // Less than an hour, return in minutes
            return Math.floor(diff / (1000 * 60)) + " minutes";
        } else if (diff < 1000 * 60 * 60 * 24) {
            // Less than a day, return in hours
            return Math.floor(diff / (1000 * 60 * 60)) + " hours";
        } else if (diff < 1000 * 60 * 60 * 24 * 7) {
            // Less than a week, return in days
            return Math.floor(diff / (1000 * 60 * 60 * 24)) + " days";
        } else if (diff < 1000 * 60 * 60 * 24 * 30) {
            // Less than a month, return in weeks
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 7)) + " weeks";
        } else if (diff < 1000 * 60 * 60 * 24 * 365) {
            // Less than a year, return in months
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) + " months";
        } else {
            // More than or equal a year, return in years
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365)) + " years";
        }
    }
      

    //Filter Data from Search
    let filteredData = (query == "" ? TxnHistoryData : TxnHistoryData.filter((item) => {
        console.log(item);
        if(item.details.transactionHash.includes(query.toLowerCase()) || item.details.blockHash.includes(query.toLowerCase()) || item.details.from.toLowerCase().includes(query.toLowerCase()) || item.txn_time.toLowerCase().includes(query.toLowerCase())) return item;
    }))

    return (
        <>
        <TableContainer
            sx={{
                minWidth: "750px",
                mx: "auto",
            }}
        >
            <Table
                aria-labelledby="tableTitle"
            >
                <TableHead>
                    <TableRow>
                    {
                        headColumn.map((head, key) => (
                            <TableCell key={key}>{head}</TableCell>
                        ))
                    }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredData                  
                        .slice((page * rowsPerPage), (page + 1)*rowsPerPage).map((data, key) => (
                            <TableRow key={key}>
                                <TableCell title={data.details.transactionHash} sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.transactionHash}</TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.hasOwnProperty("value")? "Transfer": "Self-Transfer"}</TableCell>
                                <TableCell title={data.details.blockHash} sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.blockHash}</TableCell>
                                <TableCell title={data.details.from} sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.from}</TableCell>
                                <TableCell title={data.details.to? data.details.to : data.details.contractAddress} sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.to? data.details.to :  data.details.contractAddress}</TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.value? data.details.value*1e18: data.details.cumulativeGasUsed}</TableCell>
                                <TableCell>{parseFloat(data.details.gasUsed)}</TableCell>
                                <TableCell title={data.txn_time.replace("T", " ")}>{getAge(data.txn_time)}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            size='xl'
                            page={page}
                            count={filteredData.length}
                            onPageChange={handlePageChange}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={changeRowPerpage}
                            showFirstButton
                            showLastButton
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
        </>
    )
}