import {
  Container,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Typography,
  CircularProgress,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FetchSodas, Reprice, Restock } from "../../api/Api";

const AdminControl = () => {
  // Use state
  const [sodas, setSodas] = useState();
  const [qtyID, setQtyID] = useState(0);
  const [costID, setCostID] = useState(0);
  const [qty, setQty] = useState(0);
  const [cost, setCost] = useState("0.0");
  // Fetch data
  const ApiCalls = async () => {
    const _sodas = await FetchSodas();
    setSodas(_sodas);
  };
  // Use effect
  useEffect(() => {
    ApiCalls();
  }, []);
  // Handlers
  const handleQtyIdChange = (event) => {
    setQtyID(Number(event.target.value));
  };
  const handleQtyChange = (event) => {
    setQty(Number(event.target.value));
  };
  const handleOnRestock = async () => {
    if (!qtyID || !qty) return;
    // Api Call
    const result = Restock(sodas[qtyID].product_id, qty);
    // Update sodas
    if (result) {
      let _sodas = [...sodas];
      _sodas[qtyID].quantity += qty;
      setSodas(_sodas);
    }
  };
  const handleCostIdChange = (event) => {
    setCostID(Number(event.target.value));
  };
  const handleCostChange = (event) => {
    if (parseFloat(event.target.value))
      setCost(parseFloat(event.target.value).toFixed(2));
  };
  const handleOnChangeCost = async () => {
    if (!cost || !costID) return;
    // Api Call
    const result = await Reprice(sodas[costID].product_id, cost);
    // Update sodas
    if (result) {
      let _sodas = [...sodas];
      _sodas[costID].cost = cost;
      setSodas(_sodas);
    }
  };

  if (!sodas)
    return (
      <Container maxWidth="xs" style={{ textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  return (
    <Container maxWidth="sm">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Soda Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sodas.map((soda) => (
            <TableRow key={soda.id}>
              <TableCell key={"1-" + soda.id}>{soda.id}</TableCell>
              <TableCell key={"2-" + soda.id}>{soda.product_name}</TableCell>
              <TableCell key={"3-" + soda.id}>{soda.quantity}</TableCell>
              <TableCell key={"4-" + soda.id}>{soda.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="space-between" mt={5}>
        <TextField
          variant="outlined"
          style={{ maxWidth: 50 }}
          label="ID"
          onChange={handleQtyIdChange}
          value={qtyID}
        />
        <TextField
          variant="outlined"
          style={{ maxWidth: 100 }}
          label="Quantity"
          onChange={handleQtyChange}
          value={qty}
        />
        <Button variant="outlined" onClick={handleOnRestock}>
          Restock
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <TextField
          variant="outlined"
          style={{ maxWidth: 50 }}
          label="ID"
          onChange={handleCostIdChange}
          value={costID}
        />
        <TextField
          variant="outlined"
          style={{ maxWidth: 100 }}
          label="Cost"
          onChange={handleCostChange}
          value={cost}
        />
        <Button variant="outlined" onClick={handleOnChangeCost}>
          Reprice
        </Button>
      </Box>
    </Container>
  );
};

export default AdminControl;
