import React from "react";
import "./home.css";

import logo from "../img/2.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-backgroud"></div>
      <div className="home-desc">
        <h3>Print, termotisak, sitotisak, kumpjutersko izrezivanje</h3>
        <p>
          Zagarantirana prilagodljivost, ugodna suradnja i kompletna provedba
          Vaših želja!
        </p>
        <button>Pošalji upit</button>
      </div>
      <div className="home-img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Home;
