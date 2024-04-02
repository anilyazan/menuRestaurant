import React from "react";
import { Link } from "react-router-dom";
import twoImage from "../assets/hamburgerArkaPlan.jpg";
function Home() {
  return (
    <div className="Home" style={{ backgroundImage: `url(${twoImage})` }}>
      <div className="headerContainer">
        <h1>Hot Burger</h1>
        <p>Delicious Hamburgers with Spaical Hands</p>
        <Link to="/menu">
          <button>Order Now </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
