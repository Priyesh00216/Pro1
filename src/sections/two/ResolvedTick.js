import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Checkbox, Typography } from '@mui/material';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

import { EmpCallRequestAcc2 } from '../../assets/data/TableData';

const columns = [
  ...EmpCallRequestAcc2.columns, 
  { title: 'Edit', field: 'edit', minWidth: 100 }, 
  { title: 'Action', field: 'action', minWidth: 100 }, 
];

export default function ResolvedTick() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = EmpCallRequestAcc2.rows;

  return (
    <div className='d-flex flex-row justify-content-around '>
      <Paper elevation={5} className='m-3 w-100'>
      <Typography className='w-100 m-3 align-self-center' variant="h5" >Table</Typography>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.field}
                    align="center" 
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {row.map((cell, cellIndex) => (
                      <TableCell key={cellIndex} align="center"> 
                        {cell}
                      </TableCell>
                    ))}
                    <TableCell key="edit" align="center">
                      <EditNoteOutlinedIcon/>
                    </TableCell>
                    <TableCell key="action" align="center">
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      </Paper>
    </div>
  );
}
