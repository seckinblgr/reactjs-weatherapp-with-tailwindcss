import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function Search() {
  const { city, setCity, handleClick, handleSearch } =
    useContext(WeatherContext); //contexten gelen değerlerimiz alıyoruz.

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center ">
        <input
          type="text"
          placeholder=" Search "
          value={city} // input değeri olarak city state i veriyoruz
          onChange={(e) => {
            setCity(e.target.value); //input üzerindeki değişikliği takip ediyoruz.
          }}
          className="  tracking-widest text-xl font-light border-b p-2 text-white w-full shadow-xl focus:outline-none text-center capitalize  bg-transparent"
        />

        <button onClick={handleSearch}>
          <UilSearch // istenilen konum için onclick ile butona tıklandıgında arama işlemi yapıyoruz.
            size={25}
            className="text-white  ml-6 cursor-pointer transition ease-out hover:scale-150"
          />
        </button>
      </div>

      <div className="flex flex-row w-1/4  mx-auto items-center justify-center">
        <button onClick={handleClick}>
          <UilLocationPoint // konum butonuna tıklandıgında handleclick ile kulllanıcın konumunu aldıgımız fonskiyonumu çalıştırıyoruz.
            size={25}
            className="text-white cursor-pointer mx-auto transition ease-out hover:scale-150"
          />
        </button>
      </div>
    </div>
  );
}

export default Search;
