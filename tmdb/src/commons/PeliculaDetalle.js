import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeliculaDetalle = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const apiKey = "45c519909f0a8dd6854cb8f7066ffc3e";
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((pelicula1) => pelicula1.data)
      .then((peli) => setPelicula(peli))
      .catch((error) => console.log(error));
  }, [id]);

  const addFavorites = (pelicula) => {
    axios
      .post("/api/user/favorites", {
        userId: user.id,
        movie: pelicula,
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="row p-5 bg-secondary bg-gradient">
        <div className="col-4 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`}
            className="card-img-top"
            width="600px"
            alt="..."
            style={{ marginLeft: "650px" }}
          />
        </div>
        <div className="col-8 pt-5 text-center text-light">
          <h1 className="text-warning has-text-centered is-size-2 has-text-weight-bold">
            {pelicula.title + " ( " + pelicula.release_date + " )"}
          </h1>
          <h5 className="pt-5 is-size-4">{pelicula.overview}</h5>
          <h1 className="pt-5 text-warning is-size-5">
            Rating: {pelicula.vote_average}
          </h1>
        </div>
        {user ? (
          <button
            onClick={() => addFavorites(pelicula)}
            className="btn btn-primary is-size-5 button is-info is-rounded"
            style={{ marginLeft: "750px" }}
          >
            Add To Favorites
          </button>
        ) : (
          <button
            className="has-text-centered btn btn-primary is-size-5 button is-info is-rounded"
            style={{ marginLeft: "750px" }}
          >
            Login to add to favorites
          </button>
        )}
      </div>
    </>
  );
};

export default PeliculaDetalle;
