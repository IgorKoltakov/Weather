import { useState, useRef, useEffect } from "react";
import React from "react";

export default function Search({ setCity, status, inputFocus }) {
  const [inputcity, setInputCity] = useState("");

  const inputRef = useRef()

  useEffect(() => {
    inputFocus(inputRef);
  }, [])

  const HandleKey = (event) => {
    if (event.key === "Enter" && inputcity) {
      setCity(inputcity);
      status()
    }
  };

  const handleSearch = () => {
      setCity(inputcity);
      status()
  };

  // створи компонент пошуку для сайту погоди
  return (
    <div className="search-form">
      <input
        className="search-field"
        type="text"
        value={inputcity}
        placeholder="Search"
        onChange={(e) => setInputCity(e.target.value)}
        onKeyDown={HandleKey}
        ref={inputRef}
      />
      <div onClick={handleSearch} className="search-button">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Interface / Search_Magnifying_Glass">
            <path
              id="Vector"
              d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
