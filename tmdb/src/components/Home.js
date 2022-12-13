import Card from "../commons/Card";
import Search from "./Search";

const Home = (populares) => {
  const peliculas = populares["populares"];

  return (
    <div>
      <Search />
      {peliculas[0] ? <Card peliculas={peliculas} /> : <h2>No hay datos</h2>};
    </div>
  );
};
export default Home;
