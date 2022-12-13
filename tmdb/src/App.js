import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Register from "./components/Register";
import Login from "./components/Login";
import PagUsuario from "./components/PagUsuario";
import Users from "./components/Users";
import Home from "./components/Home";
import axios from "axios";
import PeliculaDetalle from "./commons/PeliculaDetalle";

const App = () => {
  // aca retorno como se veria mi pagina
  const [populares, setPopulares] = useState({});
  const apiKey = "45c519909f0a8dd6854cb8f7066ffc3e";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2022-09-15&primary_release_date.lte=2022-10-22`
      )
      .then((peliculas) => peliculas.data)
      .then((pelicula) => setPopulares(pelicula.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    //Header
    <div>
      <Navbar />

      <div></div>
      <Routes>
        <Route path="/" element={<Home populares={populares} />} />

        <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
        <Route path="/logeado" element={<PagUsuario />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />

        <Route path="/user" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
