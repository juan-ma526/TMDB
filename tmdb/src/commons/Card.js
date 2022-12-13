import { Link } from "react-router-dom";

const Card = ({ peliculas }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        marginLeft: "80px",
      }}
    >
      {peliculas?.map((peli, i) => (
        <div className="col-3 mt-5" key={i}>
          <div className="card " style={{ width: "18rem" }}>
            <Link to={`/pelicula/${peli.id}`}>
              <img
                style={{ margin: "4px" }}
                src={`https://image.tmdb.org/t/p/original/${peli.poster_path}`}
                className="card-img-top"
                alt={`${peli.original_title}`}
              />
            </Link>

            <div className="card-body">
              <h5 className="card-title">{peli.original_title}</h5>
              <p className="card-text">{peli.overview.slice(0, 80) + "..."}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
