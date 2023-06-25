import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Image, ListGroup, Modal, Row } from "react-bootstrap";
import Navi from "../components/Nav";
import Message from '../components/Error'
import { AiFillDelete } from "react-icons/ai";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { AppBar, Tab, Tabs } from "@mui/material";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/Signup";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import Modals from "@mui/material/Modal";
import axios from "axios";
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
const Cart = () => {
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
  const {user,
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  window.scrollTo(0, 0);

  return (
    <>
      <Navi />
      <div className="home" style={{borderBottom:'0.5px solid rgba(0,0,0,0.1)'}} >
        <div className="productContainer" style={{width:'60%'}}>
          <ListGroup style={{width:'70%'}}>
            {cart.map((prod) => (
              <ListGroup.Item key={prod._id} style={{border:'0.5px solid rgba(0,0,0,0.1)',borderRadius:'10px',marginTop:'5px'}}>
                <Row>
                  <Col md={2}>
                    <Image src={'/images/' + prod.image}  alt={prod.name} fluid rounded style={{height:'100px'}} />
                  </Col>
                  <Col md={3}>
                   <Link to={`/Shopnow/${prod._id}`} style={{textDecoration:'none',color:'black'}}><span>{prod.name}</span></Link> 
                  </Col>
                  <Col md={2}>Rs. {prod.price}</Col>
                  <Col md={1}></Col>
                  <Col md={2}>
                    <Form.Select
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod._id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary" >
          <span className="title">Subtotal ({cart.length}) items</span><hr/>
          <span style={{ fontWeight: "700", fontSize: "20" }}>
            {" "}
            Total:<span style={{color:'rgba(0,0,0,0.7)'}}>&nbsp;Rs.&nbsp;{total}</span>
          </span>
        
        
        
        {user? ( <a href="/Checkout" className="disabled" style={cart.length===0? {pointerEvents:'none',cursor:'default'} : {}} ><Button className="proceed" style={{backgroundColor:'rgb(247, 68, 78)',border:'none',borderRadius:'2px',width:'100%',height:'40px'}} type="button" disabled={cart.length === 0} >
            <span>Proceed to Checkout</span>
          </Button></a>):(
                <div className="my-3">
                <Message variant={"alert-warning"}>
                    Please{" "}
                    <span style={{color:'blue',fontWeight:'200'}}  onClick={handleOpen}>
                      <strong>"Login"</strong>
                    </span>{" "}
                    first 
                  </Message>
                  <Modals
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
     </Modals>
                  </div>
        
          )}
        
        
            <Alert/>
        </div>
      </div><div style={{marginTop:'10px'}}>
      <Footer/></div>
    </>
  );
};

export default Cart;
