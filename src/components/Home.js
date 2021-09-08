import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import printer from "../img/printer.png";
import logo from "../img/2.jpg";

function Home() {
  const handleLink = () => {
    window.open(
      "https://www.facebook.com/POS-obrt-za-grafiku-i-usluge-1193402927484758"
    );
  };

  return (
    <div className="home">
      <div className="home-desc">
        <h3>Print, termotisak, sitotisak, kumpjutersko izrezivanje</h3>
        <p>
          Zagarantirana prilagodljivost, ugodna suradnja i kompletna provedba
          Vaših želja!
        </p>
        <button onClick={() => handleLink()}>
          Zapratite nas <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
      <div className="home-img">
        <img src={logo} alt="printer" />
      </div>
    </div>
  );
}

export default Home;
