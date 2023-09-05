import React, {useState} from 'react';



//Read data from mock up file. if(backend == true) -> return "Call API using async + fetch"
import txnHistoryData from "../mock/txn.json";
import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody, TablePagination, TableFooter} from '@mui/material';

const headColumn = ["#", "Method", "Block", "From", "To", "Amount", "Transaction Fee", "Age"];

//Use prop to get access to search features.
export default function TxnTable({query}) {
    const [page, setPage] = useState(0);
    const historyData = txnHistoryData;
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (e, newPage) => {
        setPage(newPage);
    }
    const changeRowPerpage = (e) => {
        setRowsPerPage(parseInt(e.target.value));
        setPage(0);
    }

    //Filter Data from Search
    let filteredData = historyData.filter((item) => {
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
                                <TableCell>{data.hash}</TableCell>
                                <TableCell>{data.method}</TableCell>
                                <TableCell>{data.block}</TableCell>
                                <TableCell>{data.from}</TableCell>
                                <TableCell>{data.to}</TableCell>
                                <TableCell>{data.amount} ETH</TableCell>
                                <TableCell>{parseFloat(data.txnFee)} ETH</TableCell>
                                <TableCell>{data.age}</TableCell>
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