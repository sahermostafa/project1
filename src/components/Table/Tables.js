import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Box from '@material-ui/core/Box';

function createData(Variant_Table,  Description) {
  return { Variant_Table , Description };
}

const rows = [
  createData("VC_VT_BASECMB-V00","FORKLIFTER MODEL REST.00" ),
  createData("AVC_VT_BASECMB-V01", "FORKLIFTER MODEL REST.01"),
  createData("AVC_VT_BASECMB-V10", "FORKLIFTER MODEL REST.XX"),
  createData("VC_VT_BASECMB-V11","FORKLIFTER MODEL REST.00" ),
  createData("AVC_VT_BASECMB-V02", "FORKLIFTER MODEL REST.01"),
  createData("AVC_VT_BASECMB-v20", "FORKLIFTER MODEL REST.XX"),
  createData("VC_VT_BASECMB-V22","FORKLIFTER MODEL REST.00" ),
  createData("AVC_VT_BASECMB-V03", "FORKLIFTER MODEL REST.01"),
  createData("AVC_VT_BASECMB-VXX", "FORKLIFTER MODEL REST.XX"),
];

export default function Tables() {
  return (
    <Box my="3rem" pt={3}>
      <TableContainer component={Paper} m={2}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell  colSpan={3}>Variant_Table</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  padding="checkbox" colSpan={3}><div style={{display:`flex`}}><Checkbox color="primary" /><p style={{}}>{row.Variant_Table}</p></div></TableCell>
              <TableCell >{row.Description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
  );
}