import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import SearchBox from "./components/SearchBox/SearchBox";
import CoinItem from "./components/CoinItem/CoinItem";
import CoinModal from "./components/CoinModal/CoinModal";
import Footer from "./components/Footer/Footer";

export const SYMBOL = {
  usd: "$",
  eur: "€",
  jpy: "¥",
  php: "₱",
};

function App() {
  const [coins, setCoins] = useState([]);
  const [coinsLoading, setCoinsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [topCoins, setTopCoins] = useState([]);
  const [topCoinsLoading, setTopCoinsLoading] = useState(false);

  const [page, setPage] = useState("10");
  const [currency, setCurrency] = useState("usd");

  const [id, setId] = useState("");
  const [coin, setCoin] = useState({});
  const [coinLoading, setCoinLoading] = useState(false);

  const proxyServer = "";
  const coinsUrl = `${proxyServer}https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${page}&page=1&sparkline=false`;
  const coinUrl = `${proxyServer}https://api.coingecko.com/api/v3/coins/${id}`;

  const [currentId, setcurrentId] = useState("");
  const [currentPage, setcurrentPage] = useState("");
  const [currentCurrency, setcurrentCurrency] = useState("");

  useEffect(() => {
    if (currentCurrency !== currency || currentPage !== page) {
      getCoins();
    }
    if (currentId != id) {
      getCoin();
    }
  }, [id, page, currency]);

  const getCoins = async () => {
    setTopCoinsLoading(true);
    setCoinsLoading(true);
    await axios
      .get(coinsUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setCoins(res.data);
        setTopCoins(res.data.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
    setcurrentPage(page);
    setcurrentCurrency(currency);
    setTopCoinsLoading(false);
    setCoinsLoading(false);
  };

  const getCoin = async () => {
    setCoinLoading(true);
    await axios
      .get(coinUrl, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setcurrentId(id);
    setCoinLoading(false);
  };

  const searchCoins = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar setPage={setPage} setCurrency={setCurrency} />

      <Banner
        topCoins={topCoins}
        topCoinsLoading={topCoinsLoading}
        setId={setId}
        symbol={SYMBOL[currency]}
      />

      <SearchBox searchCoins={searchCoins} page={page} />

      {coinsLoading ? (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-warning w-100"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      ) : (
        <CoinItem
          filteredCoins={filteredCoins}
          setId={setId}
          symbol={SYMBOL[currency]}
        />
      )}

      <CoinModal
        coin={coin}
        coinLoading={coinLoading}
        symbol={SYMBOL[currency]}
      />

      <Footer />
    </>
  );
}

export default App;
