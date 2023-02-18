import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import Rating from "./Rating";
const Card = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div
        className="ab col-sm-6 col-md-4 col-lg-4 "
        style={{
          width: "350px",
          height: "340px",
          marginTop: "50px",
          marginLeft: "50px",
          boxShadow: "5px 5px 5px -5px rgb(0 0 0 / 20%)",
          padding: "0",
         
        }}
      >
        <div
          className="card p-0 overflow hidden "
          style={{
            border: "none",
            height: "330px",
            width: "340px",
            marginLeft: "0px",
            borderRadius: "0%",
            backgroundColor: "rgba(0,0,0,0.03)",
            
          }}
        >
          <div
            className="card-body"
            style={{ height: "340px", justifyContent: "center",}}
          >
            <img
              src={prod.image}
              alt=""
              className="imgprop"
              style={{
                width: "120px",
                height: "160px",
                margin: "50px 0px 0px 90px",
              }}
            />

            <div className="card-title">
              {" "}
              <h1
                className="card-title"
                style={{
                  fontSize: "18px",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  marginTop: "40px",
                  marginLeft: "20px",
                  position: "absolute",
                }}
              >
                {prod.name}
              </h1>
            </div>
            <div className="card-rate">
              {" "}
              <h1
                className="card-rate"
                style={{
                  fontSize: "17px",
                  fontFamily: "Montserrat",
                  fontWeight: "550",
                  marginTop: "31px",
                  marginLeft: "250px",
                  position: "absolute",
                }}
              >
                Rs.{prod.price}
              </h1>
            </div>

            <div style={{marginTop:'70px',marginLeft:'90px'}}><Rating value={prod.rating} text={`${prod.numReviews} reviews`} /></div>

            <div
              style={{
                height: "350px",
                width: "350px",
                position: "relative",
                margin: "-320px 0px 0px -15px",
                overflow: "hidden",
              
             
              }}
            >
              <div
                className="ancho"
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  height: "340px",
                  width: "355px",
                  marginLeft: "-4px",
                  marginTop: "350px",
                }}
              >
                {cart.some((p) => p._id === prod._id) ? (
                  <button
                    className="anchor"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      });
                    }}
                    style={{
                      marginTop: "115px",
                      textDecoration: "none",
                      border: "none",
                      backgroundColor: "#f7444e",
                      position: "absolute",
                      paddingTop: "0px",
                      color: "white",
                      textAlign: "center",
                      height: "40px",
                      width: "170px",
                      fontSize: "16px",
                      marginLeft: "85px",
                      fontFamily: "Montserrat",
                      borderRadius: "30px",
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="anchor"
                    disabled={!prod.inStock}
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: prod,
                      });
                    }}
                    style={{
                      marginTop: "115px",
                      textDecoration: "none",
                      border: "none",
                      backgroundColor: "#f7444e",
                      position: "absolute",
                      paddingTop: "0px",
                      color: "white",
                      textAlign: "center",
                      height: "40px",
                      width: "160px",
                      fontSize: "16px",
                      marginLeft: "90px",
                      fontFamily: "Montserrat",
                      borderRadius: "30px",
                    }}
                  >
                    {!prod.inStock ? (
                      <div
                        className="outofstock"
                        style={{
                          color: "white",
                          border: "none",
                          padding: "6px",
                          backgroundColor: "#f7444e",
                          outline: "skyblue",
                          height: "40px",
                          width: "160px",
                          borderRadius: "30px",
                          marginLeft: "-6px",
                        }}
                      >
                        <u>Out Of Stock</u>
                      </div>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                )}



                 <Link to={`/Shopnow/${prod._id}`}>
                  <button
                    className="anchch"
                    style={{
                      marginTop: "165px",
                      textDecoration: "none",
                      border: "none",
                      paddingTop: "0px",
                      textAlign: "center",
                      position: "absolute",
                      color: "white",
                      backgroundColor: "black",
                      height: "40px",
                      width: "160px",
                      fontSize: "16px",
                      marginLeft: "90px",
                      fontFamily: "Montserrat",
                      outline: "2px solid #002c3e",
                      borderRadius: "30px",
                    }}>
                    Shop Now
                  </button>
                </Link> 
                
                
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
