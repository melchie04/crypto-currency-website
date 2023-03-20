import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import CoinItem from "./components/CoinItem/CoinItem";
import CoinModal from "./components/CoinModal/CoinModal";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [coin, setCoin] = useState({});
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url).then(res => {
      setCoins(res.data);
    }).catch(err => {
      console.log("List Axios Error: " + err);
    });
  }, []);
  
  const handleChange = (e) => {
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
      console.log("Modal Axios Error: " + err);
    });
  }

  return (
    <div className='wrapper'>
      <Navbar handleChange={handleChange}/>
      <div className="container-fluid w-100 text-center pt-4">
        <h3 className="text-warning">CRYPTOCURRENCY PRICES BY MARKET CAP</h3>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-evenly w-100 pt-4 px-4">
        {filteredCoins.map(coin => (
          <CoinItem coin={coin} getCoin={getCoin} key={coin.id} />
        ))}
      </div>
      <CoinModal coin={coin} />
    </div>
  )
}

export default App
