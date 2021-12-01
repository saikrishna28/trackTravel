import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import "./AddEntry.scss";
import { TripData } from "../../Models/TripData";
import AppPage from "../AppPage/AppPage";

interface AddEntryProps {}

const AddEntry: React.FunctionComponent<AddEntryProps> = () => {
  const [custName, setCustName] = useState("");
  const [custNum, setCustNum] = useState(0);
  const [custId, setCustId] = useState("");

  const [journeyFrom, setJourneyFrom] = useState("");
  const [journeyTo, setJourneyTo] = useState("");
  const [journeyDate, setJourneyDate] = useState<Date | null>(null);

  const [vehicleNum, setVehicleNum] = useState("--Select--");
  const [driverName, setDriverName] = useState("");
  const [driverNum, setDriverNum] = useState(0);
  const [openingReading, setOpeningReading] = useState(0);
  const [endReading, setEndReading] = useState(0);
  const [totalReading, setTotalReading] = useState(0);

  const [paymentType, setPaymentType] = useState("Cash");
  const [tollFee, setTollFee] = useState(0);
  const [kmDriven, setKmDriven] = useState(0);
  const [driverBeta, setDriverBeta] = useState(0);
  const [advance, setAdvance] = useState(0);
  const [parkingFee, setParkingFee] = useState(0);
  const [costPerKm, setCostPerKm] = useState(0);
  const [totalPay, setTotalPay] = useState(0);
  const [netPay, setNetPay] = useState(0);

  const [tripData, setTripData] = useState<TripData>({
    custName,
    custNum,
    custId,
    journeyFrom,
    journeyTo,
    journeyDate,
    vehicleNum,
    driverName,
    driverNum,
    openingReading,
    endReading,
    totalReading,
    paymentType,
    tollFee,
    kmDriven,
    driverBeta,
    advance,
    parkingFee,
    costPerKm,
    totalPay,
    netPay,
  });

  const handleSubmit = () => {
    setTripData({
      custName,
      custNum,
      custId,
      journeyFrom,
      journeyTo,
      journeyDate,
      vehicleNum,
      driverName,
      driverNum,
      openingReading,
      endReading,
      totalReading,
      paymentType,
      tollFee,
      kmDriven,
      driverBeta,
      advance,
      parkingFee,
      costPerKm,
      totalPay,
      netPay,
    });
  };
  console.log(tripData);
  return (
    <AppPage>
      <div className="add-entry">
        <div className="add-entry__container">
          <div className="add-entry__title-div">
            <h1 className="add-entry__title">Add New Entry</h1>
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
                  value={custName}
                  onChange={(newValue) => {
                    setCustName(newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Mobile"
                  variant="outlined"
                  type="number"
                  value={custNum}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setCustNum(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="ID Proof"
                  variant="outlined"
                  value={custId}
                  onChange={(newValue) => {
                    setCustId(newValue.target.value);
                  }}
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
                  value={journeyFrom}
                  onChange={(newValue) => {
                    setJourneyFrom(newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="To"
                  variant="outlined"
                  value={journeyTo}
                  onChange={(newValue) => {
                    setJourneyTo(newValue.target.value);
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="DOJ"
                    value={journeyDate}
                    onChange={(newValue) => {
                      setJourneyDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
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
                    value={vehicleNum}
                    label="Vehicle num"
                    onChange={(newValue) => {
                      setVehicleNum(newValue.target.value);
                    }}
                  >
                    <MenuItem value={"--Select--"}>--Select--</MenuItem>
                    <MenuItem value={"AP28DS9999"}>AP28DS9999</MenuItem>
                    <MenuItem value={"Card"}>Card</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className="entry-input"
                  label="Driver Name"
                  variant="outlined"
                  value={driverName}
                  onChange={(newValue) => {
                    setDriverName(newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Driver Number"
                  variant="outlined"
                  type="number"
                  value={driverNum}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setDriverNum(+newValue.target.value);
                  }}
                />
                {/* <TextField
                className="entry-input"
                label="Total Reading"
                variant="outlined"
                type="number"
              /> */}
                <TextField
                  className="entry-input"
                  label="Opening Reading"
                  variant="outlined"
                  type="number"
                  value={openingReading}
                  onChange={(newValue) => {
                    setOpeningReading(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="End Reading"
                  variant="outlined"
                  type="number"
                  value={endReading}
                  onChange={(newValue) => {
                    setEndReading(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Total Reading"
                  variant="outlined"
                  type="number"
                  value={totalReading}
                  onChange={(newValue) => {
                    setTotalReading(+newValue.target.value);
                  }}
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
                    value={paymentType}
                    label="Type"
                    onChange={(newValue) => {
                      setPaymentType(newValue.target.value);
                    }}
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
                  value={advance}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setAdvance(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Toll Charges"
                  variant="outlined"
                  type="number"
                  value={tollFee}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setTollFee(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Parking Charges"
                  variant="outlined"
                  type="number"
                  value={parkingFee}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setParkingFee(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Driver Beta"
                  variant="outlined"
                  type="number"
                  value={driverBeta}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setDriverBeta(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="KMs driven"
                  variant="outlined"
                  type="number"
                  value={kmDriven}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">KM</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setKmDriven(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Cost per KM"
                  variant="outlined"
                  type="number"
                  value={costPerKm}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setCostPerKm(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Net Payable"
                  variant="outlined"
                  type="number"
                  value={netPay}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setNetPay(+newValue.target.value);
                  }}
                />
                <TextField
                  className="entry-input"
                  label="Total"
                  variant="outlined"
                  type="number"
                  value={totalPay}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                  onChange={(newValue) => {
                    setTotalPay(+newValue.target.value);
                  }}
                />
              </div>
            </div>
          </Paper>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </AppPage>
  );
};

export default AddEntry;
