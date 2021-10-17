import React from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

const Login = ({ token, message, handleTokenChange, handleLogin }) => {
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Enter Admin Auth Token
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {message && (
            <Typography variant="caption" color="error" gutterBottom>
              {message}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            size="small"
            value={token}
            onChange={handleTokenChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={async () => await handleLogin()}>
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
