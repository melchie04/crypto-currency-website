import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CoinItem from "./components/CoinItem/CoinItem";
import CoinModal from "./components/CoinModal/CoinModal";
import Footer from "./components/Footer/Footer"

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
    <>
      <Navbar
        searchCoins={searchCoins}
        setPage={setPage}
        setCurrency={setCurrency}
      />

      <Header 
        page={page}
      />

      <CoinItem
        filteredCoins={filteredCoins}
        getCoin={getCoin}
        symbol={SYMBOL[currency]}
      />
       
      <CoinModal
        coin={coin}
        symbol={SYMBOL[currency]}
      />

      <Footer />
    </>
  )
}

export default App
