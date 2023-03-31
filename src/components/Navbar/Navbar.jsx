import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage, setCurrency }) => {
  const changePage = (event) => {
    setPage(event.target.value);
  };

  const changeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <nav className="navbar bg-transparent bg-body-tertiary">
      <div className="container-fluid px-3">
        <a className="navbar-brand fs-3 fw-bolder text-warning" href="#">
          CRYP2WEB
        </a>
        <form className="row d-flex" role="search">
          <div className="col-auto d-flex align-items-center position-relative my-1 px-1">
            <select
              className="form-select bg-transparent text-light"
              aria-label="Select Fiat"
              onChange={changeCurrency}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <div className="col-auto d-flex align-items-center position-relative my-1 px-1">
            <select
              className="form-select bg-transparent text-light"
              aria-label="Select Page"
              onChange={changePage}
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
