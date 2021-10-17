import React from "react";
import { Box, TextField, MenuItem, Button } from "@material-ui/core";

const InsertCoin = ({ handleCoinSelect, coin, handleDeposit }) => {
  return (
    <Box display="flex" justifyContent="space-between" mt={2} mx={1}>
      <TextField
        select
        id="select-coin-to-insert"
        label="Select Coin"
        style={{ minWidth: 100, width: "50%" }}
        value={coin}
        onChange={handleCoinSelect}
      >
        <MenuItem value={0.25} key="0.25">
          $0.25
        </MenuItem>
        <MenuItem value={0.5} key="0.50">
          $0.50
        </MenuItem>
        <MenuItem value={0.75} key="0.75">
          $0.75
        </MenuItem>
        <MenuItem value={1.0} key="1.00">
          $1.00
        </MenuItem>
      </TextField>
      <Button variant="outlined" onClick={async () => await handleDeposit()}>
        Deposit
      </Button>
    </Box>
  );
};

export default InsertCoin;
