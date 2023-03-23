import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

const SearchBox = ({ searchCoins, page }) => {
  return (
    <>
      <div className="container-fluid text-center pt-5">
        <h3 className="text-warning">
          TOP {page} CRYPTO CURRENCY BY MARKET CAP
        </h3>
      </div>
      <div className="container-fluid d-flex justify-content-center py-3">
        <div className="box bg-transparent p-2 d-flex align-items-center border-bottom border-2 border-warning">
          <FontAwesomeIcon
            className="fs-5 text-light text-muted px-2"
            icon={faSearch}
          />
          <input
            type="search"
            className="bg-transparent text-light flex-grow h-100 w-100 border-0"
            placeholder="Search Your Crypto Currency"
            aria-label="Search"
            onChange={searchCoins}
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
