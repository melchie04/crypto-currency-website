import React from "react";
import coingecko from "../../assets/coingecko-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-transparent text-light text-center fw-light p-3">
      <p className="m-0 p-0">© 2023 Crypto Website. All Rights Reserved.</p>
      <p className="text-light m-0 px-0 py-1">
        <img className="me-1 mb-1" src={coingecko} alt="Coingecko" width="18" />
        Data provided by{" "}
        <a
          className="text-yellow text-decoration-none border-bottom border-yellow"
          href="https://www.coingecko.com/"
          target="_blank"
        >
          CoinGecko
        </a>
      </p>
      <p className="m-0 p-0 text-muted">
        Developed by Melchor Bendanillo Callos
      </p>
    </footer>
  );
};

export default Footer;
