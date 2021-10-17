import React from "react";
import { Grid, Button } from "@material-ui/core";

const ButtonGroup = ({ sodas, handleCheckout }) => {
  return (
    <Grid container spacing={1} style={{ marginTop: 5 }}>
      {sodas.map((soda) => (
        <Grid item xs={6} key={"grid_xs6_id_" + soda.id}>
          <Button
            variant="outlined"
            fullWidth
            key={"button_id_" + soda.id}
            onClick={async () => await handleCheckout(soda.id)}
          >
            {soda.id}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonGroup;
