import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useParams } from "react-router";
import { Table } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const CheckOut = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedDate, setSelectedDate] = React.useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };

  const handleOrder = () => {};

  useEffect(() => {
    fetch("https://limitless-coast-06672.herokuapp.com/product/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Order Place Date"
              value={selectedDate.checkIn}
              onChange={handleCheckInDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{product.productName}</td>
              <td>1</td>
              <td>{product.productPrice}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Button variant="contained" onClick={handleOrder}>
        Checkout
      </Button>
    </>
  );
};

export default CheckOut;
