import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import AppPage from "../AppPage/AppPage";
import "./VehiclesDetails.scss";

interface VehiclesDetailsProps {}

const VehiclesDetails: React.FunctionComponent<VehiclesDetailsProps> = () => {
  return (
    <AppPage>
      <div className="vehicles">
        <div className="vehicles__container">
          <Paper
            elevation={5}
            className="vehicles__vehicle-details details-card"
          >
            <div className="details-card__inputs-div">
              <div className="details-card__vehicles-div">
                <Typography
                  color="#003f7d;"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Add Vehicle:
                </Typography>
                <div className="details-card__inputs-div-vehicles">
                  <TextField
                    className="entry-input"
                    label="Vehicle Num"
                    variant="outlined"
                    value={"custName"}
                    onChange={(newValue) => {
                      // setCustName(newValue.target.value);
                    }}
                  />
                  <Button variant="contained" onClick={() => {}}>
                    Add
                  </Button>
                </div>
              </div>
              <div className="details-card__drivers-div">
                <Typography
                  color="#003f7d;"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Add Driver Data:
                </Typography>
                <div className="details-card__inputs-div-drivers">
                  <TextField
                    className="entry-input"
                    label="Driver Name"
                    variant="outlined"
                    value={"custName"}
                    onChange={(newValue) => {
                      // setCustName(newValue.target.value);
                    }}
                  />
                  <TextField
                    className="entry-input"
                    label="Driver Num"
                    variant="outlined"
                    value={"9192939495"}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91</InputAdornment>
                      ),
                    }}
                    onChange={(newValue) => {
                      // setCustName(newValue.target.value);
                    }}
                  />
                  <Button variant="contained" onClick={() => {}}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
          <div className="vehicles__divs">
            <div className="vehicles__divs-vehicle">
              <Typography
                color="#003f7d;"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Vehicles Data:
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Vehicle Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {"AP39BV9999"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {"AP28DS1234"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="vehicles__divs-driver">
              <Typography
                color="#003f7d;"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Driver Data:
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Driver Name</TableCell>
                      <TableCell>Driver Number</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {"Rajesh"}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {"Sanjay"}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {"9090909090"}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {"9134309876"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </AppPage>
  );
};

export default VehiclesDetails;
