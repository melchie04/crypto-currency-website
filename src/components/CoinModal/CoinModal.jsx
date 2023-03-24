import React from "react";
import DOMPurify from "dompurify";
import { SYMBOL } from "../../App";
import "./CoinModal.css";

const CoinModal = ({ coin, coinLoading, symbol }) => {
  const currentPrice = (() => {
    switch (symbol) {
      case SYMBOL.usd:
        return (
          <>
            {coin.market_data?.current_price ? (
              <span>
                {symbol}
                {coin.market_data.current_price.usd.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.eur:
        return (
          <>
            {coin.market_data?.current_price ? (
              <span>
                {symbol}
                {coin.market_data.current_price.eur.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.jpy:
        return (
          <>
            {coin.market_data?.current_price ? (
              <span>
                {symbol}
                {coin.market_data.current_price.jpy.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.php:
        return (
          <>
            {coin.market_data?.current_price ? (
              <span>
                {symbol}
                {coin.market_data.current_price.php.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      default:
        return;
    }
  })();

  const low24h = (() => {
    switch (symbol) {
      case SYMBOL.usd:
        return (
          <>
            {coin.market_data?.low_24h ? (
              <span>
                {symbol}
                {coin.market_data.low_24h.usd.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.eur:
        return (
          <>
            {coin.market_data?.low_24h ? (
              <span>
                {symbol}
                {coin.market_data.low_24h.eur.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.jpy:
        return (
          <>
            {coin.market_data?.low_24h ? (
              <span>
                {symbol}
                {coin.market_data.low_24h.jpy.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.php:
        return (
          <>
            {coin.market_data?.low_24h ? (
              <span>
                {symbol}
                {coin.market_data.low_24h.php.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      default:
        return;
    }
  })();

  const high24h = (() => {
    switch (symbol) {
      case SYMBOL.usd:
        return (
          <>
            {coin.market_data?.high_24h ? (
              <span>
                {symbol}
                {coin.market_data.high_24h.usd.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.eur:
        return (
          <>
            {coin.market_data?.high_24h ? (
              <span>
                {symbol}
                {coin.market_data.high_24h.eur.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.jpy:
        return (
          <>
            {coin.market_data?.high_24h ? (
              <span>
                {symbol}
                {coin.market_data.high_24h.jpy.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.php:
        return (
          <>
            {coin.market_data?.high_24h ? (
              <span>
                {symbol}
                {coin.market_data.high_24h.php.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      default:
        return;
    }
  })();

  const marketCap = (() => {
    switch (symbol) {
      case SYMBOL.usd:
        return (
          <>
            {coin.market_data?.market_cap ? (
              <span>
                {symbol}
                {coin.market_data.market_cap.usd.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.eur:
        return (
          <>
            {coin.market_data?.market_cap ? (
              <span>
                {symbol}
                {coin.market_data.market_cap.eur.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.jpy:
        return (
          <>
            {coin.market_data?.market_cap ? (
              <span>
                {symbol}
                {coin.market_data.market_cap.jpy.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      case SYMBOL.php:
        return (
          <>
            {coin.market_data?.market_cap ? (
              <span>
                {symbol}
                {coin.market_data.market_cap.php.toLocaleString()}
              </span>
            ) : null}
          </>
        );
      default:
        return;
    }
  })();

  return (
    <div
      className="modal fade"
      id="coinModal"
      tabIndex="-1"
      aria-labelledby="coinModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          {coinLoading ? (
            <div className="loader my-5"></div>
          ) : (
            <>
              <div className="modal-header">
                <h1 className="modal-title" id="coinModalLabel">
                  <span className="fst-italic text-muted fw-normal">
                    #{coin.market_cap_rank}
                  </span>
                  <span className="ps-3">{coin.name}</span>
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row border-bottom border-3 border-warning py-3">
                  <div className="col fs-5">
                    {coin.image ? (
                      <img
                        className="mb-1"
                        src={coin.image.small}
                        alt="logo"
                        width="22"
                        height="22"
                      />
                    ) : null}
                    <span className="ps-2">{coin.name}</span>
                    {coin.symbol ? (
                      <span className="ps-2">
                        {coin.symbol.toUpperCase()}/USD
                      </span>
                    ) : null}
                  </div>
                  <div className="col-auto fs-4 fw-semibold">
                    {currentPrice}
                  </div>
                </div>
                <div className="row border-bottom border-3 border-warning py-3 sm-text-size">
                  <div className="col-12 d-flex justify-content-center px-0">
                    <table className="w-100 text-center">
                      <thead>
                        <tr>
                          <th className="border border-2">1h</th>
                          <th className="border border-2">24h</th>
                          <th className="border border-2">7d</th>
                          <th className="border border-2">14d</th>
                          <th className="border border-2">30d</th>
                          <th className="border border-2">1yr</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_1h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_24h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_24h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_24h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_24h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                          <td className="border pt-3 border-2">
                            {coin.market_data
                              ?.price_change_percentage_24h_in_currency ? (
                              <p>
                                {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                                  1
                                )}
                                %
                              </p>
                            ) : null}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row border-bottom border-3 border-warning py-3 sm-text-size">
                  <div className="col-12 px-0">
                    <div className="d-flex justify-content-between border-bottom border-1">
                      <span className="fw-semibold">24 Hour Low</span>
                      {low24h}
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-1">
                      <span className="fw-semibold">24 Hour High</span>
                      {high24h}
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-1">
                      <span className="fw-semibold">Market Cap</span>
                      {marketCap}
                    </div>
                    <div className="d-flex justify-content-between border-bottom border-1">
                      <span className="fw-semibold">Circulating Supply</span>
                      {coin.market_data ? (
                        <span>{coin.market_data.circulating_supply}</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row py-3">
                  <h5>About</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        coin.description ? coin.description.en : ""
                      ),
                    }}
                  ></p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning fw-semibold"
                  data-bs-dismiss="modal"
                >
                  CLOSE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinModal;
