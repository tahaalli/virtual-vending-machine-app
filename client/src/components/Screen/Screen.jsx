import React from "react";
import { Box, Typography } from "@material-ui/core";

const Screen = ({ message, balance = 0 }) => {
  return (
    <Box
      height="50%"
      bgcolor="lightgray"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="center" mb={2}>
        <Typography variant="caption">
          Balance: ${balance.toFixed(2)}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography variant="caption">{message}</Typography>
      </Box>
    </Box>
  );
};

export default Screen;
