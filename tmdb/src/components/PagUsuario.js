import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PagUsuario = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`api/user/favorites/${user.id}`)
        .then((res) => setFavoritos(res.data))
        .catch(() => console.log("Necesitas hacer un LogIn"));
    }
  }, []);

  const removeFavorites = (movieId, userId) => {
    axios
      .post("/api/user/delete", { movieId: movieId, userId: userId })
      .catch(() => console.log("Necesitas hacer un LogIn"));
  };

  return user ? (
    <div>
      <></>
      <h1 className="text-warning has-text-centered is-size-2 has-text-weight-bold">
        Bienvenido {user.name}
      </h1>
      <strong>
        <h2 className="text-warning has-text-centered is-size-3 has-text-weight-bold">
          Peliculas Favoritas
        </h2>
      </strong>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>MovieId</th>
            <th>Titulo</th>
            <th>Rating</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {favoritos.map((favorito) => {
            return (
              <tr key={favorito.id}>
                <td>#</td>
                <td>{favorito.movieId}</td>
                <td>{favorito.title}</td>
                <td>{favorito.rating}</td>
                <td>
                  <button
                    class="button is-danger"
                    onClick={() => removeFavorites(favorito.id, user.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>Necesitas estar logeado para ver tu lista de favoritos</h1>
  );
};

export default PagUsuario;
