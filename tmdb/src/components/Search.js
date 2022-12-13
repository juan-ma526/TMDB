import axios from "axios";
import { useState } from "react";

import Card from "../commons/Card";

const Search = () => {
  const apiKey = "45c519909f0a8dd6854cb8f7066ffc3e";
  const [value, setValue] = useState("");
  const [peli, setPeli] = useState([]);

  const handleValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${value}& page=1&include_adult=false`
      )
      .then((pelicula) => pelicula.data.results)
      .then((peli) => {
        setPeli(peli);
        setValue("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class="column is-12">
      <div class="field is-grouped">
        <p class="control " style={{ marginLeft: "850px" }}>
          <input
            onChange={handleValue}
            class="input"
            type="text"
            placeholder="Buscar Pelicula...."
            value={value}
          />
        </p>
        <button class="button is-outlined" onClick={handleClick}>
          Buscar
        </button>
      </div>
      {peli[0] ? <Card peliculas={peli} /> : <h2></h2>}
    </div>
  );
};

export default Search;
