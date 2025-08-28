import React, { useState, useEffect, useRef } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import "./Form.css";
import { useSelector } from "react-redux";
import districtsData from "./distric.json";

const states = Object.keys(districtsData);

const AddressForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    district: "",
    zip: "",
    discription:""
  });
  const [errors, setErrors] = useState({});
  const firstRef = useRef();

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value ? "" : "Name required";
      case "phone":
        return /^\d{10,15}$/.test(value) ? "" : "Invalid phone";
      case "address":
        return value ? "" : "Address required";
      case "landmark":
        return value ? "" : "Landmark required";
      case "city":
        return value ? "" : "City required";
      case "state":
        return value ? "" : "State required";
      case "district":
        return value ? "" : "District required";
      case "zip":
        return value ? "" : "PIN code required";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { district: "" } : {}),
    }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const extractPrice = (price) => {
    const match = typeof price === "string" && price.match(/\d+(?:\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + extractPrice(item.price) * item.quantity,
    0
  );

  const message = `Hello, I'm interested in the following products:\n${cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} price: ₹${item.price} (Quantity: ${
          item.quantity
        })`
    )
    .join("\n")} \nTotal Price: ₹${totalPrice.toFixed(2)} \n \n Address : \n Name: ${form.name} \n Phone: ${form.phone} \n Adress: ${form.address}\n Landmark: ${form.landmark} \n City: ${form.city} \n State: ${form.state} \n District: ${form.district} \n Pin-code: ${form.zip} \n ${form.discription.length > 0 ? 'Discription:': ''}  ${form.discription}  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.entries(form).reduce((acc, [k, v]) => {
      const msg = validateField(k, v);
      if (msg) acc[k] = msg;
      return acc;
    }, {});
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      const phoneNumber = "+918923720937";
      if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      const whatsappURL =
        cartItems.length > 0 &&
        `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${JSON.stringify(encodeURIComponent(message))}`;
      window.open(whatsappURL, "_blank");
    }
  };

  const districts = districtsData[form.state] || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Paper className="form-container" elevation={4}>
        <Typography variant="h5" align="center" gutterBottom>
          Shipping Address
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                inputRef={firstRef}
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                autoComplete="name"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                inputMode="numeric"
                autoComplete="tel"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Street Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
                autoComplete="address-line1"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Landmark"
                name="landmark"
                error={!!errors.landmark}
                value={form.landmark}
                onChange={handleChange}
                helperText={errors.landmark}
              />
            </Grid>
            <Grid item>
              <TextField
                select
                fullWidth
                label="State"
                name="state"
                value={form.state}
                onChange={handleChange}
                error={!!errors.state}
                helperText={errors.state}
                autoComplete="address-level1"
              >
                {states.map((st) => (
                  <MenuItem key={st} value={st}>
                    {st}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                select
                fullWidth
                label="District"
                name="district"
                value={form.district}
                onChange={handleChange}
                error={!!errors.district}
                helperText={errors.district}
                disabled={!districts.length}
              >
                {districts.map((d) => (
                  <MenuItem key={d} value={d}>
                    {d}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
                autoComplete="address-level2"
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="PIN Code"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                error={!!errors.zip}
                helperText={errors.zip}
                inputMode="numeric"
                autoComplete="postal-code"
              />
            </Grid>
             <Grid item>
              <TextField
                fullWidth
                label="Discription - (please add size of dresses if you buy) (Optional)"
                name="discription"
                value={form.discription}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
              >
                Proceed
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </motion.div>
  );
};

export default AddressForm;
