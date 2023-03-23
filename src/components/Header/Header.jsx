import React from "react";
import AliceCarousel from "react-alice-carousel";
import "./Header.css";

const Header = ({ topCoins, getCoin, symbol }) => {
  const items = topCoins.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <div
        className="carousel text-light py-3 px-0 align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#coinModal"
        onClick={() => getCoin(coin.id)}
        key={coin.id}
      >
        <img src={coin?.image} alt={coin.name} height="80" className="mb-2" />
        <br />
        <span>
          {coin?.symbol.toUpperCase()}
          &nbsp;
          <span className={profit > 0 ? "success" : "danger"}>
            {profit && "+"}
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <br />
        <span className="fw-bold fs-5">
          {symbol}
          {coin?.current_price.toLocaleString()}
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="container-fluid pt-5 text-center custom-header">
      <h1 className="text-light fw-bolder pb-5">
        Cryp <span className="text-warning">2</span> Web
      </h1>
      <div className="container-fluid h-50 d-flex align-items-center px-0">
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>
    </div>
  );
};

export default Header;
