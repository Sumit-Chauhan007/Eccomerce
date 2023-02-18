import { Box, Button, TextField } from "@mui/material";
import { CartState } from "../../context/Context";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import React, { useState } from "react";

const SignUp = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAlert } = CartState();
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Password do no match",
        type: "error",
      });
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
      setAlert({
        open:true,
        message:`Sign Up Successful. Welcome ${result.user.email}`,
        type:"success",
      });
      handleClose()
    } catch (error) {
        setAlert({
            open:true,
        message: error.message,
        type:"error",
        })
        return;
    }
  };

  return (
    <Box
      p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        varient="contained"
        size="large"
        style={{ backgroundColor: "rgb(247, 68, 78)", color: "white" }}
        onClick={handleSubmit}
      >
        SignUp
      </Button>
    </Box>
  );
};

export default SignUp;
