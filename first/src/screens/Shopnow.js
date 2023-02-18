import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navi from "../components/Nav";
import Rating from "../components/Rating";
import Message from '../components/Error'
import Footer from '../components/Footer'
import { CartState } from "../context/Context";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AppBar, Tab, Tabs } from "@mui/material";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/Signup";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
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
const SingleProduct = ({ match }) => {
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
    const [product,setProduct] =  useState([]);
    const { id } = useParams();
    useEffect(()=>{
      const fetchproducts = async ()=>{
        
        const { data } =await axios.get(`/api/products/${id}`);
        setProduct(data);
      };
      fetchproducts();
    },[id])
  const {
    state: { cart },
    dispatch,
    user
  } = CartState();
  window.scrollTo(0, 0);
  return (
    <>
      <Navi />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6"  >
            <div className="single-image">
              <img src={product.image} alt={product.name} style={{width:'200px',margin:'40px 0 0 200px'}} className="shopnowimage" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name"><br/><h3>{product.name}</h3></div>
              </div>
              <p><br/>{product.description}</p>
              <div className="product-count col-lg-7">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6><br/><br/>Price</h6>
                  <span>Rs.{product.price}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  {product.inStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>unavailable</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Reviews</h6>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </div>
               {cart.some((p) => p._id === product._id) ? (
                  <button
                   
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }}
                    style={{
                      marginTop: "50px",
                      textDecoration: "none",
                      border: "none",
                      backgroundColor: "rgb(247, 68, 78)",
                      paddingTop: "0px",
                      color: "white",
                      textAlign: "center",
                      height: "40px",
                      width: "170px",
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      borderRadius: "3px",
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                   
                    disabled={!product.inStock}
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      });
                    }}
                    style={{
                      marginTop: "50px",
                      textDecoration: "none",
                      border: "none",
                      backgroundColor: "rgb(247, 68, 78)",
                      paddingTop: "0px",
                      color: "white",
                      textAlign: "center",
                      height: "40px",
                      width: "170px",
                      fontSize: "16px",
                      fontFamily: "Montserrat",
                      borderRadius: "3px",
                    }}
                  >
                    {!product.inStock ? (
                      <div
                        style={{
                          marginTop: "0px",
                          textDecoration: "none",
                          border: "none",
                          backgroundColor: "orange",
                          paddingTop: "5px",
                          color: "white",
                          textAlign: "center",
                          height: "40px",
                          width: "170px",
                          fontSize: "16px",
                          fontFamily: "Montserrat",
                          borderRadius: "3px",
                          marginLeft: "-6px",
                        }}
                      >
                        <i className="fas fa-exclamation" ></i>&nbsp;<u>Out Of Stock</u>
                      </div>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">REVIEWS</h6>
          
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>
              <Rating />
              <span>Jan 12 2022</span>
              <div className="alert alert-info mt-3">
                jksdsjdbfjksdbjfkvsnlfljjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjn
                bj bj bj jb jb jb bj jb b ,j ,n hkbbh hbkkjlor
              </div>
            </div>
          </div>
          <div className="col-md-6"><br/>
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>
           
           
              {!user ? (
                 <div className="my-3">
                 <Message variant={"alert-warning"}>
                     Please{" "}
                     <span style={{color:'blue',fontWeight:'200'}}  onClick={handleOpen}>
                       <strong>"Login"</strong>
                     </span>{" "}
                     to write a review{" "}
                   </Message>
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
         
        ) : (
          <form>
              <div className="my-4">
                <strong>Rating</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select....</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong>Comment</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3  mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  SUBMIT
                </button>
              </div>
            </form>
        )}
            
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
};

export default SingleProduct;
