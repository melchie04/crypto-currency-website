import React from 'react';
import './CoinItem.css'

const CoinItem = ({ coin, getCoin }) => {
  return (
    <div className="item bg-light w-100 p-3 mb-4 position-relative"  data-bs-toggle="modal" data-bs-target="#coinModal" onClick={() => getCoin(coin.id)}>
        <div className='ribbon position-absolute'>
            <span className='text-danger fw-bold'>#{coin.market_cap_rank}</span>
        </div>
        <h4>
            <img className='mb-2 me-2' src={coin.image} alt="logo" width="50" height="50" />
            {coin.symbol.toUpperCase()}
        </h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item p-0 mt-2">
                <span className='text-muted'>Name: </span>
                <span className='fw-semibold'>{coin.name}</span>
            </li>
            <li className="list-group-item p-0 mt-2">
                <span className='text-muted'>Current Price: </span>
                <span className='fw-semibold'>${coin.current_price.toLocaleString()}</span>
            </li>
            <li className="list-group-item p-0 mt-2">
                <span className='text-muted'>24h: </span>
                {coin.price_change_percentage_24h < 0 ? (
                    <span className='text-danger fw-semibold'>{coin.price_change_percentage_24h.toFixed(2)}</span>
                ) : (
                    <span className='text-success fw-semibold'>{coin.price_change_percentage_24h.toFixed(2)}</span>
                )}
            </li>
            <li className="list-group-item p-0 mt-2">
                <span className='text-muted'>24 Volume: </span>
                <span className='fw-semibold'>${coin.total_volume.toLocaleString()}</span>
            </li>
            <li className="list-group-item p-0 mt-2">
                <span className='text-muted'>Mkt Cap: </span>
                <span className='fw-semibold'>${coin.market_cap.toLocaleString()}</span>
            </li>
        </ul>
    </div>
  );
}

export default CoinItem
