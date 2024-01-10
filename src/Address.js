import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import HostelIcon from "@mui/icons-material/Hotel";
import Grid from "@mui/material/Grid";
import "./AddDeliveryAddress.css";

function AddDeliveryAddress() {
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [addressType, setAddressType] = useState("home");

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the new address here, e.g., send it to your API.
    console.log("New address submitted:", {
      firstName,
      lastName,
      phoneNumber,
      pinCode,
      addressType,
      address,
    });
  };

  return (
    <div className="delivery-address">
      <h2>Add Delivery Address</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => handleInputChange(e, setFirstName)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => handleInputChange(e, setLastName)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => handleInputChange(e, setPhoneNumber)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pin Code"
              value={pinCode}
              onChange={(e) => handleInputChange(e, setPinCode)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Address Type</InputLabel>
              <Select
                value={addressType}
                onChange={(e) => handleInputChange(e, setAddressType)}
                fullWidth
              >
                <MenuItem value="home">
                  <HomeIcon /> Home
                </MenuItem>
                <MenuItem value="work">
                  <WorkIcon /> Work
                </MenuItem>
                <MenuItem value="hostel">
                  <HostelIcon /> Hostel
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              value={address}
              onChange={(e) => handleInputChange(e, setAddress)}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className="button-container">
          <Button
            variant="filled"
            color="outlined"
            type="submit"
            fullWidth
            className="submit-button"
            style={{ marginTop: "20px", backgroundColor: " #ef9aa1" }}
          >
            Add Delivery Address
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default AddDeliveryAddress;
