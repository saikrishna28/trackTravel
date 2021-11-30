import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./AddEntry.scss";

interface AddEntryProps {}

const AddEntry: React.FunctionComponent<AddEntryProps> = () => {
  return (
    <div className="add-entry">
      <div className="add-entry__container">
        <div className="add-entry__title">
          <h1 className="">ADD NEW ENTRY</h1>
        </div>
        <Paper
          elevation={5}
          className="add-entry__customer-details details-card"
        >
          <Typography
            color="#003f7d;"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Customer Details:
          </Typography>
          <div className="details-card__inputs-div">
            <div>
              <TextField
                className="entry-input"
                label="Name"
                variant="outlined"
              />
              <TextField
                className="entry-input"
                label="Mobile"
                variant="outlined"
              />
              <TextField
                className="entry-input"
                label="ID Proof"
                variant="outlined"
              />
            </div>
          </div>
        </Paper>
        <Paper
          elevation={5}
          className="add-entry__journey-details details-card"
        >
          <Typography
            color="#003f7d;"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Journey Details:
          </Typography>
          <div className="details-card__inputs-div">
            <div>
              <TextField
                className="entry-input"
                label="From"
                variant="outlined"
              />
              <TextField
                className="entry-input"
                label="To"
                variant="outlined"
              />
              <TextField
                className="entry-input"
                label="DOJ"
                variant="outlined"
                type="date"
              />
            </div>
          </div>
        </Paper>
        <Paper
          elevation={7}
          className="add-entry__vehicle-details details-card"
        >
          <Typography
            color="#003f7d;"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Vehicle Details:
          </Typography>
          <div className="details-card__inputs-div">
            <div>
              <FormControl>
                <InputLabel id="vehicle-select-label">Vehicle num</InputLabel>
                <Select
                  className="entry-input"
                  labelId="vehicle-select-label"
                  value={"AP28DS9999"}
                  label="Vehicle num"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"AP28DS9999"}>AP28DS9999</MenuItem>
                  <MenuItem value={"UPI"}>UPI</MenuItem>
                  <MenuItem value={"Card"}>Card</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="entry-input"
                label="Driver Name"
                variant="outlined"
              />
              <TextField
                className="entry-input"
                label="Driver Number"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Total Reading"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Opening Reading"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="End Reading"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Total Reading"
                variant="outlined"
                type="number"
              />
            </div>
          </div>
        </Paper>
        <Paper
          elevation={5}
          className="add-entry__payment-details details-card"
        >
          <Typography
            color="#003f7d;"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Payment Details:
          </Typography>
          <div className="details-card__inputs-div">
            <div>
              <FormControl>
                <InputLabel id="payment-type-select-label">Type</InputLabel>
                <Select
                  className="entry-input"
                  labelId="payment-type-select-label"
                  // id="demo-simple-select"
                  value={"Cash"}
                  label="Type"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Cash"}>Cash</MenuItem>
                  <MenuItem value={"UPI"}>UPI</MenuItem>
                  <MenuItem value={"Card"}>Card</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="entry-input"
                label="Advance Paid"
                variant="outlined"
                type="number"
              />
            </div>
            <div>
              <TextField
                className="entry-input"
                label="Toll Charges"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Parking Charges"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Driver Beta"
                variant="outlined"
                type="number"
              />
            </div>
            <div>
              <TextField
                className="entry-input"
                label="KMs driven"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Cost per KM"
                variant="outlined"
                type="number"
              />
            </div>
            <div>
              <TextField
                className="entry-input"
                label="Net Payable"
                variant="outlined"
                type="number"
              />
              <TextField
                className="entry-input"
                label="Total"
                variant="outlined"
                type="number"
              />
            </div>
          </div>
        </Paper>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default AddEntry;
