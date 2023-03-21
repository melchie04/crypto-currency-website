import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import CoinItem from "./components/CoinItem/CoinItem";
import CoinModal from "./components/CoinModal/CoinModal";
import coingecko from "./assets/coingecko-logo.png";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [coin, setCoin] = useState({});
  const [page, setPage] = useState('10');
  const [currency, setCurrency] = useState('usd');
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`;
  const SYMBOL = {
    "usd": "$",
    "eur": "€",
    "jpy": "¥",
    "php": "₱"
  };

  useEffect(() => {
    axios.get(url).then(res => {
      setCoins(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, [page, currency]);
  
  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const getCoin = (id) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(res => {
      setCoin(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className='wrapper'>
      <Navbar
        searchCoins={searchCoins}
        page={page}
        setPage={setPage}
        currency={currency}
        setCurrency={setCurrency}
      />
      <div className="container-fluid w-100 text-center pt-4">
        <h3 className="text-warning">TOP {page} CRYPTOCURRENCY BY MARKET CAP</h3> 
        <p className="text-light pt-2">
          <img className="me-1 mb-1" src={coingecko} alt="Coingecko Logo" width="25" />
          Data provided by <a className="text-light" href="https://www.coingecko.com/">CoinGecko</a>
        </p>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly w-100 p-4">
        {filteredCoins.map(coin => (
          <CoinItem 
            coin={coin}
            getCoin={getCoin}
            key={coin.id}
            symbol={SYMBOL[currency]}
          />
        ))}
      </div>
      <CoinModal
        coin={coin}
        symbol={SYMBOL[currency]}
      />
      <footer className="bg-dark text-light text-center fw-light p-3">
        <p className="m-0 p-0">© 2023 Crypto Website. All Rights Reserved.</p>
        <p className="m-0 p-0 text-muted">Developed by Melchor Bendanillo Callos</p>
      </footer>
    </div>
  )
}

export default App
