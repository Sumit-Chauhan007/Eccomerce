import React from "react";


import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { AppBar, Tab, Tabs } from "@mui/material";
import Login from "./Login";
import SignUp from "./Signup";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { CartState } from "../../context/Context";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'background.paper',
  boxShadow: 24,

  overflow:"hidden"
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { setAlert }= CartState();
  const googleProvider = new GoogleAuthProvider();  
    const signInWithGoogle =()=>{
      signInWithPopup(auth,googleProvider).then(res=>{
        setAlert({
          open:true,
          message:`Sign Up Successfully. Welcome ${res.user.email}`,
          type:'success', 
        });
        handleClose();
      }).catch(error =>{
        setAlert({
          open:true,
        message: error.message,
        type:"error",
        });
        return;
      })
    };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        className="profileModal"
        style={{
          position: "absolute",
          marginLeft: "885px",
          marginTop: "-18px",
          backgroundColor: "rgb(247, 68, 78)",
          height: "35px",
          borderRadius:'2px'
        }}
      >
        {" "}
        <img
          src="/images/profile.png"
          alt="/"
          style={{
            cursor: "pointer",
            width: "18px",
            height: "18px",
            position: "absolute",

            marginTop: "-7px",
            filter: "invert(100%)",
          }}
        />
        <span
          style={{
            marginTop: "18px",

            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "9px",
            color: "white",
          }}
        >
          Profile
        </span>
      </Button>

      <Modal
        ariaLabelledBy="transition-modal-title"
        ariaDescribedBy="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <AppBar
              position="static"
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                style={{ borderRadius: 10 }}
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value===0 && <Login handleClose={handleClose}/> }
            {value===1 && <SignUp handleClose={handleClose}/>}
            <Box style={{padding:24,paddingTop:0,display:"flex",flexDirection:'column',textAlign:'center',gap:20,fontSize:20}} >
                <span className="boxgooglespan">OR</span>
                <GoogleButton
                style={{width:"100%",outline:"none",marginTop:'-1px'}} onClick={signInWithGoogle}/>
            </Box>

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
