import { Snackbar } from "@mui/material";
import React from "react";
import { CartState } from "../context/Context";
import MuiAlert from "@mui/material/Alert";
const Alert = () => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  const { alert, setAlert } = CartState();
  return (
    <Snackbar className="snackalert" open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert 
        onClose={handleClose}
        elevation={10}
        variant="filled"
        severity={alert.type}
        
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;
