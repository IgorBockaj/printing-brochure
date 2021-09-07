import React, { useState } from "react";
import ServiceList from "./ServiceList";
import PhotoGalery from "./PhotoGalery";
import "./services.css";

function Services() {
  const [show, setShow] = useState(false);

  return (
    <div className="services">
      <div className="background"></div>
      <div className="service-types">
        <div>
          <h2>print</h2>
          <ServiceList
            types={[
              "vizitke",
              "letci",
              "kalendari",
              "naljepnice",
              "etikete",
              "pozivnice",
              "cjenici",
            ]}
          />
        </div>
        <div>
          <h2>termotisak</h2>
          <ServiceList types={["majice", "kape"]} />
        </div>
        <div>
          <h2>sitotisak</h2>
          <ServiceList
            types={["majice", "rokovnici", "privjesci", "upaljači"]}
          />
        </div>
        <div>
          <h2>
            kompjutersko <br /> izrezivanje
          </h2>
          <ServiceList
            types={["PVC naljepnice", "auto naljepnice", "reklame"]}
          />
        </div>
      </div>
      <div className="button">
        <button onClick={() => setShow(true)} className="button-gallery">
          Galerija
        </button>
      </div>
      <PhotoGalery show={show} onClose={() => setShow(false)} />
    </div>
  );
}

export default Services;
