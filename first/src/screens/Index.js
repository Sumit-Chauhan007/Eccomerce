import Card from "../components/Card";
import Navi from "../components/Nav";
import Bot from "../components/Bot";
import Carou from "../components/Caro";
import Review from "../components/Review";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import axios from "axios";
import Pagination from "../components/Pagination";



const Home = () => {
  const [data, setData] = useState([]);

    useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/auth/ReactApiGetProducts");
        setData(response.data.data); // Access the nested array using response.data.data
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set an empty array if there's an error to avoid "data.map is not a function" error
      }
    };

    fetchProducts();
  }, []);
  console.log(data);

  const [userData, setUserData] = useState({
    email: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { email } = userData;
    const res = await fetch(
      "https://ecommerce-website-9fa69-default-rtdb.firebaseio.com/Discount.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      }
    );
    if (res) {
      alert("You Have Subscribe Successfully!!");
    } else {
      alert("plz filled the data");
    }
  };

  

  return (
    <>
      <Navi />

      <div
        style={{
          position: "relative",
          width: "100%",
          marginTop: "0px",
          marginLeft: "0px",
        }}
      >
        <Carou />
        
      </div>
      <div
        style={{
          width: "1450px",
          height: "530px",
          position: "relative",
          marginTop: "200px",
        }}
      >
        <h1
          className="Why"
          style={{
            fontFamily: "Playfair Display,serif",
            fontWeight: "bold",
            marginTop: "80px",
            marginLeft: "500px",
            fontSize: "3.5rem",
            position: "relative",
          }}
        >
          Why Shop With Us
        </h1>
        <div
          style={{
            width: "350px",
            height: "250px",
            borderRadius: "5px",
            marginLeft: "180px",
            marginTop: "50px",
            backgroundColor: "#002c3e",
          }}
        >
          <img
            src="/images/delivery.png"
            alt="/"
            style={{
              width: "60px",
              height: "60px",
              filter: "invert(10)",
              marginLeft: "135px",
              marginTop: "40px",
            }}
          />
          <h5
            style={{
              color: "white",
              fontSize: "22px",
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            Fast Delivery
          </h5>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
              marginLeft: "20px",
              width: "300px",
            }}
          >
            variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div
          style={{
            width: "350px",
            height: "250px",
            borderRadius: "5px",
            marginLeft: "580px",
            marginTop: "-250px",
            backgroundColor: "#002c3e",
          }}
        >
          <img
            src="/images/free.png"
            alt="/"
            style={{
              width: "60px",
              height: "60px",
              filter: "invert(10)",
              marginLeft: "135px",
              marginTop: "40px",
            }}
          />
          <h5
            style={{
              color: "white",
              fontSize: "22px",
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            Free Shiping
          </h5>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
              marginLeft: "20px",
              width: "300px",
            }}
          >
            variations of passages of Lorem Ipsum available
          </p>
        </div>
        <div
          style={{
            width: "350px",
            height: "250px",
            borderRadius: "5px",
            marginLeft: "980px",
            marginTop: "-250px",
            backgroundColor: "#002c3e",
          }}
        >
          <img
            src="/images/medal.png"
            alt="/"
            style={{
              width: "60px",
              height: "60px",
              filter: "invert(10)",
              marginLeft: "140px",
              marginTop: "40px",
            }}
          />
          <h5
            style={{
              color: "white",
              fontSize: "22px",
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "700",
            }}
          >
            Best Quality
          </h5>
          <p
            style={{
              color: "white",
              fontFamily: "Montserrat",
              textAlign: "center",
              marginLeft: "20px",
              width: "300px",
            }}
          >
            variations of passages of Lorem Ipsum available
          </p>
        </div>
      </div>
      <div
        style={{
          width: "1460px",
          height: "500px",
          position: "relative",
          backgroundColor: "rgb(213, 206, 209)",
        }}
      >
        <img
          src="/images/arrival-bg.jpg"
          alt=""
          style={{ width: "900px", height: "500px", marginLeft: "200px" }}
        />
        <h1
          style={{
            fontFamily: "Playfair Display,serif",
            fontWeight: "bold",
            marginTop: "-400px",
            marginLeft: "750px",
            color: "#002c3e",
            fontSize: "3.5rem",
            position: "relative",
          }}
        >
          #New Arrivals
        </h1>
        <p
          style={{
            fontFamily: "Montserrat",
            marginLeft: "750px",
            width: "500px",
            marginTop: "20px",
          }}
        >
          uscipit fugiat molestias, veniam, vel architecto veritatis delectus
          repellat modi impedit sequi.
        </p>
        <a
          href="./"
          className="shopp"
          style={{
            position: "absolute",
            marginLeft: "750px",
            backgroundColor: "rgb(247, 68, 78)",
            height: "50px",
            paddingTop: "11.5px",
            marginTop: "10px",
            textAlign: "center",
            width: "160px",
            textDecoration: "none",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            border: "1px solid rgb(247, 68, 78)",
            color: "white",
          }}
        >
          <span>Shop Now</span>
        </a>
      </div>
      <h1
        id="ourproducts"
        className="our"
        style={{
          position: "relative",
          marginTop: "80px",
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "3.5rem",
          marginLeft: "550px",
        }}
      >
        <span style={{ color: "rgb(0, 44, 62)" }}>Our</span>{" "}
        <span style={{ color: "rgb(247, 68, 78)" }}>products</span>
      </h1>
      <div style={{ marginTop: "0px", position: "relative", width: "1450px" }}>
        <section className="py-5 container">
          {data.length === 0 ? (
            <div
              className="row justify-content-center"
              style={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Products are unavailable because server is off
            </div>
          ) : (
            <div className="row justify-content-center">
                {data.map((prod) => {
                  return <Card prod={prod} key={prod._id} />;
                })}
            </div>
          )}
        </section>
      </div>
      <Pagination />

      <a
        href="./"
        className="shopp"
        style={{
          position: "absolute",
          marginLeft: "635px",
          backgroundColor: "rgb(247, 68, 78)",
          height: "45px",
          paddingTop: "10px",
          marginTop: "0px",
          textAlign: "center",
          width: "220px",
          textDecoration: "none",
          fontFamily: "Montserrat",
          color: "white",
          border: "1px solid rgb(247, 68, 78)",
        }}
      >
        <span className="shopb">View all Products</span>
      </a>
      <div
        style={{
          marginTop: "120px",
          width: "1460px",
          height: "450px",
          paddingTop: "80px",
          position: "relative",
          backgroundColor: "rgb(213, 206, 209)",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display,serif",
            fontWeight: "bold",
            textAlign: "center",
            color: "#002c3e",
            fontSize: "2.5rem",
          }}
        >
          Subscribe To Get Discount Offers
        </h1>
        <p
          style={{
            fontFamily: "Montserrat",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          jkdccajca csajbkjbbscdeniam, vel architecto veritatis delectus
          repellat modi impedit sequi.
        </p>
        <form style={{ textAlign: "center" }} method="POST">
          <input
            className="place"
            placeholder="Enter Your Email"
            required
            pattern="[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}"
            style={{
              fontFamily: "Montserrat",
              fontSize: "15px",
              paddingLeft: "25px",
              outline: "none",
              border: "none",
              borderRadius: "90px",
              width: "700px",
              height: "60px",
            }}
            name="email"
            value={userData.email}
            onChange={postUserData}
          />
          <button
            type="submit"
            className="shopp"
            style={{
              position: "absolute",
              marginLeft: "-490px",
              backgroundColor: "rgb(247, 68, 78)",
              height: "50px",
              marginTop: "120px",
              textAlign: "center",
              width: "300px",
              borderRadius: "90px",
              textDecoration: "none",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              border: "1px solid rgb(247, 68, 78)",
              color: "white",
            }}
            onClick={submitData}
          >
            Subscribe
          </button>
        </form>{" "}
      </div>
      <div
        style={{
          width: "100%",
          height: "600px",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h1
          className="review"
          style={{
            fontSize: "55px",
            fontWeight: "bold",
            fontFamily: "Playfair Display",

            marginBottom: "0px",
          }}
        >
          Customer's Testimonial
        </h1>
        <Review />
      </div>
      <Bot />

      <div
        style={{
          width: "100%",
          height: "70px",
          position: "relative",
          backgroundColor: "rgb(34,34,34)",
        }}
      ></div>

      <Alert />
    </>
  );
};

export default Home;
