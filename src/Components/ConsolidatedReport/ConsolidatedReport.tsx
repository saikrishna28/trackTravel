import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AppPage from "../AppPage/AppPage";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import "./ConsolidatedReport.scss";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

interface ConsolidatedReportProps {}

const ConsolidatedReport: React.FunctionComponent<ConsolidatedReportProps> = (
  props
) => {
  function createData(
    name: string,
    calories: string,
    fat: string,
    carbs: string,
    protein: string,
    a: number,
    b: number
  ) {
    return { name, calories, fat, carbs, protein, a, b };
  }

  const rows = [
    createData("MCH", "HYD", "Sai Krishna", "Driver 1", "9th May", 205, 5000),
    createData("HYD", "MCH", "Sai Krishna", "Driver 1", "20th May", 205, 5000),
    createData("MCH", "BGLR", "Harish", "Driver 1", "31st June", 480, 10000),
    createData("MCH", "SPT", "Gargesh", "Driver 1", "9th July", 80, 2000),
    createData("HYD", "GOA", "Yatish", "Driver 1", "10th Aug", 600, 20000),
  ];

  return (
    <AppPage>
      <div className="consolidated-report">
        <div className="consolidated-report__container">
          <Paper className="consolidated-report__filter-paper">
            <Typography
              color="#003f7d;"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Filter Travel Records:
            </Typography>
            <div className="consolidated-report__filter-div">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="From"
                  value={new Date()}
                  onChange={(newValue) => {
                    //   setJourneyDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      className="consolidated-report__filter-input"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="To"
                  value={new Date()}
                  onChange={(newValue) => {
                    //   setJourneyDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      className="consolidated-report__filter-input"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
              <Button variant="contained">Filter</Button>
            </div>
          </Paper>
          <h2 className="travel-count-title">Total Travel Records - 5</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>From</TableCell>
                  <TableCell align="center">To</TableCell>
                  <TableCell align="center">Customer</TableCell>
                  <TableCell align="center">Driver</TableCell>
                  <TableCell align="center">DOJ</TableCell>
                  <TableCell align="center">Total Reading</TableCell>
                  <TableCell align="center">Total Cost</TableCell>
                  <TableCell align="center">Delete</TableCell>
                  <TableCell align="center">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.a}</TableCell>
                    <TableCell align="center">{row.b}</TableCell>
                    <TableCell align="center">
                      <IconButton color="error" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton color="info" aria-label="delete">
                        <CreateIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </AppPage>
  );
};

export default ConsolidatedReport;
