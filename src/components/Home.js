import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import printer from "../img/printer.png";

function Home() {
  const handleLink = () => {
    window.open("https://www.facebook.com/profile.php?id=100016913022330");
  };

  return (
    <div className="home">
      <div className="home-desc">
        <h1>
          <span>P</span>rinting <span>O</span>.<span>S</span>.
        </h1>
        <h3>Print, termotisak, sitotisak, kumpjutersko izrezivanje</h3>
        <p>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <button onClick={() => handleLink()}>
          Zapratite nas <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
      <div className="home-img">
        <img src={printer} alt="printer" />
      </div>
    </div>
  );
}

export default Home;
