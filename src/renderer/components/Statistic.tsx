import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface IStatistic {
  files: number;
  handled: number;
  success: number;
  errors: number;
}

const Statistic: FC<IStatistic> = ({ files, handled, success, errors }) => {
  const data = [
    {
      title: 'Handled',
      value: `${handled} (${((handled / files) * 100).toFixed()}%)`,
    },
    {
      title: 'Success',
      value: `${success} (${((success / files) * 100).toFixed()}%)`,
    },
    {
      title: 'Error',
      value: `${errors} (${((errors / files) * 100).toFixed()}%)`,
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }}>
        <TableHead>
          <TableRow>
            <TableCell>Statistic</TableCell>
            <TableCell align="right">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Statistic;
