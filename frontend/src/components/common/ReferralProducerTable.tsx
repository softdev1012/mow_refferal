
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';

function createData(fullname:string, group: string, revenue: number) {
  return {fullname, group, revenue };
}

const initialRows = [
  createData('Full Name','Group1', 159),
  createData('Full Name','Group2', 237),
  createData('Full Name','Group3', 262),
  createData('Full Name','Group4', 262),
 
];

const allRows = [
  ...initialRows,
  createData('Full Name','Group6', 262),
  createData('Full Name','Group7', 262),
  createData('Full Name','Group8', 262),
  createData('Full Name','Group9', 262),
];

const ReferralProducerTable = () => {
  const [showAll, setShowAll] = useState(false);
  const [rows, setRows] = useState(initialRows);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setRows(showAll ? initialRows : allRows);
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "15rem" }} aria-label="caption table">
        <caption>Top Revenue Group (All Time)<Button sx={{marginLeft:"36rem"}} size={"small"} onClick={toggleShowAll} variant="contained" color="primary">{showAll ? 'Show Less' : 'Show All'}</Button></caption>
        
        <TableHead>
          <TableRow>
          <TableCell align='center'>Full Name</TableCell>
            <TableCell align='center'>Group</TableCell>
            <TableCell align="center">Revenue</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.fullname}>
              <TableCell align='center' component="th" scope="row">
                {row.fullname}
              </TableCell>
              <TableCell align='center' component="th" scope="row">
                {row.group}
              </TableCell>
              <TableCell align="center">{row.revenue}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default ReferralProducerTable;