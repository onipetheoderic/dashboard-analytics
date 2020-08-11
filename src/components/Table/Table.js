import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#f6f7fb',
    padding:5,
    fontSize:10,
    color: '#91919e',
    [theme.breakpoints.down('sm')]: {
      fontSize:8,
    }, 
  },
  body: {
    fontSize: 10,
    color: '#45444c',
    fontWeight:'bold',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      fontSize:8,
    }, 
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
        
    },
    '&:nth-last-of-type(1)': {
        borderBottom: '4px solid white !important',
    },
    '&:nth-last-of-type(4)': {
        borderTop: '4px solid #f6f7fb !important',
    }
  },
}))(TableRow);

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs, };
}

const rows = [
  createData('SOURCES', 159, 6.0, 24, 4.0),
  createData('SESSION', 237, 9.0, 37, 4.3),
  createData('NEW USER', 262, 16.0, 24, 6.0),
  createData('BOUNCE RATE', 305, 3.7, 67, 4.3),
];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SOURCES</StyledTableCell>
            <StyledTableCell>SESSION</StyledTableCell>
            <StyledTableCell>NEW USER</StyledTableCell>
            <StyledTableCell>BOUNCE RATE</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
