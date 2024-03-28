import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Divider } from '@mui/material';

function createData(
  name: string,
  phone: string,
  email: string,
  description: string,
  sentreceived: string,
  tofrom: string,
  pay: string,
  value: string,
) {
  return { name, phone, email, description, sentreceived, tofrom, pay, value };
}

const rows = [
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  createData('Full Name', 'phone', 'email', 'description', 'sent', 'from', 'paid', 'estimated value'),
  
  
  // Add more rows as needed
];



const ProfileTable = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: 'left' }}>
          <Typography variant="h6">Referral</Typography>
          <Divider sx={{ borderTop: '2px solid #000' }} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Full&nbsp;Name</TableCell>
                  <TableCell align="center" >Phone</TableCell>
                  <TableCell align="center" >Email</TableCell>
                  <TableCell align="center" >Description</TableCell>
                  <TableCell align="center" >Sent/Received</TableCell>
                  <TableCell align="center" >To/From</TableCell>
                  <TableCell align="center" >Unpaid/Paid</TableCell>
                  <TableCell align="center" >Estimated&nbsp;Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      '&:not(:last-child)': { marginBottom: '8px' },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.sentreceived}</TableCell>
                    <TableCell align="center">{row.tofrom}</TableCell>
                    <TableCell align="center">{row.pay}</TableCell>
                    <TableCell align="center">{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default ProfileTable;
