import React from "react";
import { Box, Button, Grid } from "@mui/material";
const Block = () => {
  return (
    <div>
      <Box>
        <Grid item xs={20} sm={6}>
          <Button
            variant="filled"
            color="outlined"
            type="submit"
            fullWidth
            style={{
              backgroundColor: " #f7ba89",
              fontSize: "20px",
              width: "70%",
              marginTop: "10px",
            }}
            href="/add-delivery-address"
          >
            Add Delivery Address
          </Button>
        </Grid>
      </Box>
    </div>
  );
};

export default Block;
