import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

const Soda = ({ soda }) => {
  // Use styles
  const classes = useStyles();
  // Use state
  const [productImage, setProductImage] = useState();
  // Fetch data
  const Fetch = async () => {
    const image = await import(`../../assets/${soda.product_id}.png`);
    setProductImage(image);
  };
  // Use effect
  useEffect(() => {
    Fetch();
  }, []);

  if (!productImage) return <div></div>;
  return (
    <Card className={classes.card}>
      <Box display="flex" justifyContent="center" mt={2}>
        <img src={productImage.default} title={soda.description} />
      </Box>
      <CardContent>
        <Box justifyContent="center" display="flex">
          <Typography variant="subtitle1">
            <b>{soda.product_name}</b>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="caption">
            <b>Slot #{soda.id}</b>
          </Typography>
          <Chip label={"$" + soda.cost} size="small" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Soda;
