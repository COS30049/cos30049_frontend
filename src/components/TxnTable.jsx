import React, {useEffect, useState} from 'react';
import getTransactionHistory from '../api/getTransactionHistory';

import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody, TablePagination, TableFooter} from '@mui/material';
import { Details } from '@mui/icons-material';

const headColumn = ["#", "Method", "Block", "From", "To", "Amount", "Transaction Fee", "Age"];

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

    //Filter Data from Search
    let filteredData = query == "" ? TxnHistoryData: TxnHistoryData.filter((item) => {
        if(item.hash.toLowerCase().includes(query.toLowerCase()) || item.method.toLowerCase().includes(query.toLowerCase()) || item.block.toString().includes(query.toLowerCase()) || item.from.toLowerCase().includes(query.toLowerCase()) || item.to.toLowerCase().includes(query.toLowerCase()) || parseFloat(item.amount) >= parseFloat(query.toLowerCase()) || parseFloat(item.txnFee) >= parseFloat(query.toLowerCase()) || item.age.toLowerCase().includes(query.toLowerCase())) return item;
    })

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
                                <TableCell sx={{
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
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.blockHash}</TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.from}</TableCell>
                                <TableCell sx={{
                                    maxWidth: "200px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}>{data.details.to? data.to : ""}</TableCell>
                                <TableCell>{data.details.cumulativeGasUsed} ETH</TableCell>
                                <TableCell>{parseFloat(data.details.gasUsed)} ETH</TableCell>
                                <TableCell>{data.txn_time}</TableCell>
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