import * as React from "react";

import Drawer from "@mui/material/Drawer";

import { Avatar, Button } from "@mui/material";
import { CartState } from "../../context/Context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";



export default function UserSidebar() {
  const [state, setState] = React.useState({
    right: false,
  });
  const { user,setAlert } = CartState();
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const logOut = () => {
    signOut(auth);

    setAlert({
        open:true,
        type:"success",
        message:"Logout Successfully!"
    });
    toggleDrawer();
};

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: " rgb(247, 68, 78)",
              cursor: "pointer",
              
            }}
            onClick={toggleDrawer(anchor, true)}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div
              style={{
                width: "350px",
                padding: "25px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontFamily: "monospace",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  height: "92%",
                }}
              >
                <Avatar
                  style={{
                    width: 200,
                    height: 200,
                    cursor: "pointer",
                    backgroundColor: "rgb(247, 68, 78)",
                    objectFit: "contain",
                  }}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.displayName || user.email}{" "}
                </span>
              </div>
              <Button variant="contained" onClick={logOut} style={{height:"8%",width:'100%',backgroundColor:'rgb(247, 68, 78)',marginTop:20  }}>
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
