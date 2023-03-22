import React from 'react';
import coingecko from "../../assets/coingecko-logo.png";

const Header = ({ page }) => {
  return (
    <div className="container-fluid w-100 text-center pt-4">
        <h3 className="text-warning">TOP {page} CRYPTOCURRENCY BY MARKET CAP</h3> 
        <p className="text-light pt-2">
            <img className="me-1 mb-1" src={coingecko} alt="Coingecko Logo" width="25" />
            Data provided by <a className="text-warning text-decoration-none border-bottom border-warning" href="https://www.coingecko.com/" target="_blank">CoinGecko</a>
        </p>
    </div>
  )
}

export default Header
