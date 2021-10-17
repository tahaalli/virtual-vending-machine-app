import {
  Card,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Sodas from "../Sodas/Sodas";
import Screen from "../Screen/Screen";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import InsertCoin from "../InsertCoin/InsertCoin";
import { FetchBalance, FetchSodas } from "../../api/Api";
import { Checkout, UpdateBalance } from "../../api/Api";

const Machine = () => {
  // Use state
  const [sodas, setSodas] = useState();
  const [balance, setBalance] = useState(0);
  const [coin, setCoin] = useState(0);
  const [message, setMessage] = useState("");
  // Methods (Lifted states)
  //    Handle coin select in child component
  const handleCoinSelect = (event) => {
    // Get selected coin from event obj
    const selectedCoin = Number(event.target.value);
    // Mutate state
    setCoin(selectedCoin);
    // Validate selected coin
    if (!selectedCoin || selectedCoin < 0) {
      setMessage("Please select a valid coin!");
      return;
    }
  };
  //    Handle deposit button click in child component
  const handleDeposit = async () => {
    // Validate if there is valid selected coin
    if (!coin) {
      setMessage("Please insert a valid coin to deposit!");
      return;
    }
    // Mutate balance state
    setBalance(balance + coin);
    // Set server session
    await UpdateBalance(balance + coin);
    // Clean message if there is any
    setMessage("");
  };
  //    Handle checkout
  const handleCheckout = async (productID) => {
    // Clear message
    setMessage("");
    // Get soda by product id
    const soda = sodas.filter((soda) => soda.id === productID)[0];
    // Check balance
    if (balance < soda.cost) {
      setMessage(`Insufficient Balance! Insert $${soda.cost - balance} more!`);
      return;
    }
    // Checkout API call
    const response = await Checkout(soda.product_id);
    // Check response
    if (!response) setMessage("SOLD OUT!");
    else {
      setMessage(`Vending ${soda.product_name}`);
      // Update balance
      setBalance(balance - soda.cost);
      // Set session balance
      await UpdateBalance(balance - soda.cost);
    }
  };

  // API calls
  const ApiCalls = async () => {
    const _sodas = await FetchSodas();
    setSodas(_sodas);
    const _balance = await FetchBalance();
    setBalance(Number(_balance));
  };
  // Use effect
  useEffect(() => {
    ApiCalls();
  }, []);

  if (!sodas)
    return (
      <Container maxWidth="xs" style={{ textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Sodas sodas={sodas} />
        </Grid>
        <Grid item xs={4}>
          <Card style={{ height: "100%" }}>
            <Screen balance={balance} message={message} />
            <ButtonGroup sodas={sodas} handleCheckout={handleCheckout} />
            <InsertCoin
              handleCoinSelect={handleCoinSelect}
              coin={coin}
              handleDeposit={handleDeposit}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Machine;
