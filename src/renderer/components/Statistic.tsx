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
  subProgress: number;
  currentFile: string;
}

const rowStyle = { '&:last-child td, &:last-child th': { border: 0 } };

const Statistic: FC<IStatistic> = ({
  files,
  handled,
  success,
  errors,
  subProgress,
  currentFile,
}) => {
  const data = [
    {
      title: 'Handled',
      value: `${handled} from ${files} (${(
        (handled / files) *
        100
      ).toFixed()}%)`,
    },
    {
      title: 'Success',
      value: `${success} (${((success / files) * 100).toFixed()}%)`,
    },
    {
      title: 'Errors',
      value: `${errors} (${((errors / files) * 100).toFixed()}%)`,
    },
  ];

  const subProgressData = subProgress
    ? { title: `${currentFile} Compressing...`, value: `${subProgress}%` }
    : null;

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
            <TableRow key={row.title} sx={rowStyle}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
          {subProgressData && (
            <TableRow sx={rowStyle}>
              <TableCell component="th" scope="row">
                {subProgressData.title}
              </TableCell>
              <TableCell align="right">{subProgressData.value}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Statistic;
