import React, { useState } from 'react';
import Logo from '../../assets/crypto.png';
import './Navbar.css';

const Navbar = ({ searchCoins, page, setPage, currency, setCurrency }) => {
  const changePage = (event) => {
    setPage(event.target.value);
  }

  const changeCurrency = (event) => {
    setCurrency(event.target.value);
  }

  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand h1' href='#'>
          <img className='d-inline-block align-text-top mt-1 me-1' src={Logo} alt='Logo' width='20' height='20' />
          CRYP2WEB
        </a>
        <form className='row d-flex' role='search'>
          <div className="col-auto d-flex align-items-center position-relative my-1">
            <select className="form-select" aria-label="Default select example" value={currency} onChange={changeCurrency}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <div className="col-auto d-flex align-items-center position-relative my-1">
            <select className="form-select" aria-label="Default select example" value={page} onChange={changePage}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="col d-flex align-items-center position-relative my-1">
						<span className="position-absolute ms-3 mb-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect opacity="0.3" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="#808080" />
								<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="#808080" />
							</svg>
						</span>
            <input className='form-control ps-5' type='search' placeholder='Search' aria-label='Search' 
              onChange={searchCoins}/>
					</div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
