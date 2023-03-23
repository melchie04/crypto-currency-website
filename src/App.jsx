import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CoinItem from "./components/CoinItem/CoinItem";
import CoinModal from "./components/CoinModal/CoinModal";
import Footer from "./components/Footer/Footer";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [coins, setCoins] = useState([]);
  const [topCoins, setTopCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [coin, setCoin] = useState({});
  const [page, setPage] = useState("10");
  const [currency, setCurrency] = useState("usd");
  const thirdPartyUrl = 'https://cors-anywhere.herokuapp.com/';
  const url = `${thirdPartyUrl}https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`;
  const topUrl = `${thirdPartyUrl}https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=1&sparkline=false`;

  const SYMBOL = {
    usd: "$",
    eur: "€",
    jpy: "¥",
    php: "₱",
  };

  useEffect(() => {
    getCoins();
    getTopCoins();
  }, [page, currency]);

  const getCoins = async () => {
    await axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTopCoins = async () => {
    await axios
      .get(topUrl)
      .then((res) => {
        setTopCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const getCoin = async (id) => {
    await axios
      .get(`${thirdPartyUrl}https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar setPage={setPage} setCurrency={setCurrency} />

      <Header topCoins={topCoins} getCoin={getCoin} symbol={SYMBOL[currency]} />

      <SearchBox searchCoins={searchCoins} page={page} />

      <CoinItem
        filteredCoins={filteredCoins}
        getCoin={getCoin}
        symbol={SYMBOL[currency]}
      />

      <CoinModal coin={coin} symbol={SYMBOL[currency]} />

      <Footer />
    </>
  );
}

export default App;
