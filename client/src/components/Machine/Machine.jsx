import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Sodas from "../Sodas/Sodas";
import Screen from "../Screen/Screen";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { FetchSodas } from "../../api/Api";

const Machine = () => {
  // Use state
  const [sodas, setSodas] = useState();
  // API calls
  const ApiCalls = async () => {
    const _sodas = await FetchSodas();
    setSodas(_sodas);
  };
  // Use effect
  useEffect(() => {
    ApiCalls();
  }, []);

  if (!sodas) return <div></div>;
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Sodas sodas={sodas} />
        </Grid>
        <Grid item xs={4}>
          <Card style={{ height: "100%" }}>
            <Screen />
            <ButtonGroup sodas={sodas} />
            <Box display="flex" justifyContent="space-between"></Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Machine;
