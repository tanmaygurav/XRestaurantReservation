import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";

const SmsForm = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone) {
      alert(`App link sent to +1 ${phone}!`);
      setPhone("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1, maxWidth: 450, mt: 3 }}
    >
      <TextField
        fullWidth
        placeholder="Enter phone number"
        size="small"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">+1</InputAdornment>,
        }}
      />
      <Button type="submit" variant="contained" className="btn-primary-custom">
        Send Link
      </Button>
    </Box>
  );
};

export default SmsForm;
