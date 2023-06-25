import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./Authentication/AuthModal";
import { Dropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "reactstrap";
import UserSidebar from "./Authentication/UserSidebar";
import axios from "axios";

const Nav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/auth/ReactApiGetProducts`);
      setData(response.data.data);
    };
    fetchproducts();
  }, []);
  const {
    user,
    state: { cart },
    dispatch,
  } = CartState();
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilterData(newFilter);
  };
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ borderBottom: "0.1px solid rgba(0,0,0,0.05)", zIndex: "1" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div
            className="heist"
            style={{
              width: "10px",
              marginLeft: "40px",
              marginTop: "-10px",
              position: "absolute",
              fontFamily: "playfaire",
              textDecoration: "underline",
              fontSize: "35px",
            }}
          >
            <img src="/images/lo.png" style={{width:"80px"}}/>  
          </div>
          <div
            style={{ width: "100px", marginTop: "20px", marginLeft: "160px" }}
          ></div>
          &nbsp;
        </a>
        <div className="farm"
          style={{
            position: "absolute",
            marginLeft: "790px",
            marginTop: "0px",
            
          }}
        >
          {" "}
          <form className="d-flex" role="search">
            <i
              className="fa fa-search icon"
              style={{
                position: "absolute",
                margin: "12px 0px 0px 5px",
                fontSize: "12px",
                color: "rgba(0,0,0,0.5)",
              }}
            ></i>
            <input
              className="form-control "
              style={{
                width: "350px",
                backgroundColor: "rgba(0,0,0,0.05)",
                paddingLeft: "20px",
              }}
              type="search"
              placeholder="Search for Products,brands and more"
              aria-label="Search"
              onChange={handleFilter}
            />
          </form>
          {filterData.length !== 0 && (
            <div
              style={{
                position: "absolute",
                textAlign: "center",
                width: "100%",
                marginTop: "5px",
                overflow: "auto",
                maxHeight: "200px",
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            >
              {filterData.map((value, key) => {
                return (
                  <Link to={`/Shopnow/${value._id}`} className="dataItem" style={{ textDecoration: "none" }}>
                    <p
                      className="namefilter"
                      style={{ marginTop: "2px", color: "black" }}
                    >
                      {value.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ marginLeft: "00px" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {user ? (
          <span
            style={{
              position: "absolute",
              marginLeft: "1180px",
              marginTop: "0px",
            }}
          >
            <UserSidebar />
          </span>
        ) : (
          <AuthModal />
        )}

        <Dropdown class="point"
          style={{
            cursor: "pointer",
            width: "18px",
            height: "18px",
            position: "absolute",
            marginLeft: "1245px",
            marginTop: "-20px",
            stroke: "10px black",
          }}
        >
          <Dropdown.Toggle
            className="profileModal"
            style={{
              backgroundColor: "rgb(247, 68, 78)",
              border: "none",
              borderRadius: "2px",
              width: "70px",
              marginTop: "1px",
              height: "35.5px",
              boxShadow: "4px 4px 4px rgba(0,0,0,0.2) ",
            }}
          >
            <FaShoppingCart
              color="white"
              fontSize="17px"
              style={{ marginTop: "-5px" }}
            />
            <span style={{ fontSize: "12px" }}>
              {cart.length === 0 ? <span></span> : <span>{cart.length}</span>}
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              minWidth: 370,
              minHeight: "200px",
              maxHeight: "500px",
            }}
          >
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" Key={prod._id}>
                    <img
                      src={'/images/' + prod.image} 
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <Link
                        to={`/Shopnow/${prod._id}`}
                        style={{
                          textAlign: "left",
                          textDecoration: "none",
                          color: "black",
                          
                        }}
                      >
                        <span style={{fontWeight:'500'}}>{prod.name}</span>
                      </Link>
                      <span>Rs.{prod.price}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/Cart">
                  <Button
                    className="reactbutton"
                    style={{
                      width: "95%",
                      margin: "0px 10px",
                      backgroundColor: "rgba(247, 68, 78)",
                      border: "none",
                    }}
                  >
                    Go to Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty </span>
            )}
          </Dropdown.Menu>
        </Dropdown>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ height: "80px" }}
        >
          <ul className="navbar-nav me-auto row">
            <li className="nav-item col-sm-3">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown col-sm-3">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sections
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" onClick={window["scrollFunction1"]} >
                  Men's Section
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={window["scrollFunction1"]}>
                  Women's Section
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={window["scrollFunction1"]}>
                    All Products
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item col-sm-4">
              <Link to="/" style={{ textDecoration: "none" }}>
                <span
                  className="nav-link unanchor"
                  style={{ color: "black" }}
                  onClick={window["scrollFunction1"]}
                >
                  Products
                </span>
              </Link>
            </li>
            <li className="nav-item col-sm-1">
              <a className="nav-link " href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
