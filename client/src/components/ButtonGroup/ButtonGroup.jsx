import React from "react";
import { Grid, Button } from "@material-ui/core";

const ButtonGroup = ({ sodas }) => {
  return (
    <Grid container spacing={1} style={{ marginTop: 5 }}>
      {sodas.map((soda) => (
        <Grid item xs={6}>
          <Button variant="outlined" fullWidth>
            {soda.id}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonGroup;
