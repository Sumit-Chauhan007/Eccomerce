import React, { useState } from "react";

import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const Bot = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
  let name, value;
    const postUserData=(event)=>{
      name=event.target.name;
      value =event.target.value;

      setUserData({...userData,[name]:value})

    };
    const submitData= async (event)=>{
      event.preventDefault();
      const { email} =userData;
      const res = await fetch("https://ecommerce-website-9fa69-default-rtdb.firebaseio.com/NewsLetter.json",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          email
        }),
      }
      );
      if (res) {
        alert("You Have Subscribe Successfully!!")
      } else {
        alert("plz filled the data");
      }

    };
  return (
    <>
      <footer
        className="footer"
        style={{
          width: "100%",
          height: "480px",
          textAlign: "center",
          marginTop: "10px",
          paddingTop: "50px",
          backgroundColor: "rgb(248, 248, 248)",
          fontFamily: "Montserrat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                width: "380px",
                height: "350px",
                marginLeft: "80px",
                marginTop: "40px",
                fontFamily: "Montserrat",
              }}
            >
              <img 
              className="logologo"
                src="/images/lo.png"
                alt="/"
                style={{
                  height: "150px",
                  width: "250px",
                  position: "relative",
                  marginTop: "0px",
                  marginLeft: "-80px",
                }}
              />
              <div
                className="network col-lg-12"
                style={{ marginTop: "80px", marginLeft: "60px" }}
              >
                <Link to="">
                  <BsInstagram className="bicon" fontSize="30px"></BsInstagram>
                </Link>
                <Link to="">
                  <BsFacebook className="bicon" fontSize="30px"></BsFacebook>
                </Link>
                <Link to="">
                  <BsTwitter className="bicon" fontSize="30px"></BsTwitter>
                </Link>
                <Link to="">
                  <BsLinkedin className="bicon" fontSize="30px"></BsLinkedin>
                </Link>
                <br />
                <br />
                <br />{" "}
              </div>
              <div className="dataadd"
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  marginTop: "150px",
                  marginLeft: "310px",
                  position: "absolute",
                  width: "350px",
                }}
              >
                <p>
                  <strong>ADDRESS:</strong>&nbsp;&nbsp;&nbsp;28 White tower,
                  Street Name New York City, USA
                </p>
                <p>
                  <strong>TELEPHONE:</strong>&nbsp; +91 987 654 3210
                </p>
                <p>
                  <strong>EMAIL:</strong> &nbsp;&nbsp;yourmain@gmail.com
                </p>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "18px",
                  marginTop: "20px",

                  marginLeft: "800px",
                  position: "absolute",
                  width: "400px",
                }}
              >
                <strong>NEWSLETTER</strong>
                <br />
                <br />
                <p style={{ fontSize: "15px" }}>
                  Subscribe by our newsletter and get update .
                </p>
                <form method="POST">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    require
                    pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}"
                    style={{
                      height: "48px",
                      marginTop: "20px",
                      border: " solid #ccc 1px",
                      fontSize: "14px",
                      width: "250px",
                      padding: "10px 110px 10px 15px",
                    }}
                    name="email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                  <button type="submit"
                    style={{
                      position: "absolute",
                      background: "#f7444e",
                      color: "#fff",
                      fontSize: "14px",
                      height: "47.5px",
                      marginTop: "20px",
                      fontWeight: "600",
                      padding: "0 15px",
                      border: "none",
                    }}
                    onClick={submitData}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Bot;
