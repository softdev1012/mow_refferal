
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';

function createData(group: string, revenue: number) {
  return { group, revenue };
}

const initialRows = [
  createData('Group1', 159),
  createData('Group2', 237),
  createData('Group3', 262),
  createData('Group4', 262),

];

const allRows = [
  ...initialRows,
  createData('Group6', 262),
  createData('Group7', 262),
  createData('Group8', 262),
  createData('Group9', 262),
];

const CustomTable = () => {
  const [showAll, setShowAll] = useState(false);
  const [rows, setRows] = useState(initialRows);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setRows(showAll ? initialRows : allRows);
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "15rem" }} aria-label="caption table">
        <caption>Top Revenue Group (All Time)<Button sx={{marginLeft:"7rem"}} size={"small"} onClick={toggleShowAll} variant="contained" color="primary">{showAll ? 'Show Less' : 'Show All'}</Button></caption>
        
        <TableHead>
          <TableRow>
            <TableCell align='center'>Group</TableCell>
            <TableCell align="center">Revenue</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
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
export default CustomTable;