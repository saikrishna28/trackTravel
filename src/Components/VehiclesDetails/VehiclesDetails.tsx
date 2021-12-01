import {
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
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
        </div>
      </div>
    </AppPage>
  );
};

export default VehiclesDetails;
