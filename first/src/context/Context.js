import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducers";
import axios from 'axios'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Cart = createContext();
const Context = ({ children }) => {
  const [data,setData] =  useState([]);
  useEffect(()=>{
    const fetchproducts = async ()=>{
      const { data } =await axios.get("/api/products");
      setData(data);
    };
    fetchproducts();
  },[])
  const [user,setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) setUser(user);
      else setUser(null);
    });
  },[]);
  
  
  const [state, dispatch] = useReducer(cartReducer, {
    data: data,
    cart: [],
    shop:[],
  });

  return (
    <Cart.Provider value={{ state, dispatch, alert, setAlert,user,}}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
