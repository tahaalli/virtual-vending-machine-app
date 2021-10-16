import React from "react";
import { Toolbar, Typography, AppBar, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Navbar = () => {
  // Use styles
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar variant="dense">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button variant="text" color="inherit" component={Link} to="/">
              Virtual Vending Machine
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/admin"
            >
              Admin Dashboard
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
