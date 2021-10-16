import { Grid } from "@material-ui/core";
import React from "react";
import Soda from "../Soda/Soda";

const Sodas = ({ sodas }) => {
  return (
    <Grid container spacing={1}>
      {sodas.map((soda) => (
        <Grid item key={soda.product_id} xs={6}>
          <Soda soda={soda} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Sodas;
