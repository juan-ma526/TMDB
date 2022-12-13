import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    console.log("Cookie borrada");
    navigate("/");
  };

  return (
    <nav className="navbar has-background-black-ter mb-4">
      {/* este link me manda al home*/}
      <Link to="/">
        <h3
          type="button"
          className="navbar-item has-text-white is-size-2 has-text-weight-bold"
        >
          TMDB
        </h3>
      </Link>

      <div className="navbar-item navbar-end">
        {/* este link me manda al register*/}
        <Link to="/user/register">
          <button className="button is-ghost has-text-white is-size-4 has-text-weight-bold">
            REGISTER
          </button>
        </Link>
        {/* este link me manda a la pantalla de login*/}
        {!user ? (
          <Link to="/user/login">
            <button className="button is-ghost has-text-white is-size-4 has-text-weight-bold">
              LOGIN
            </button>
          </Link>
        ) : (
          <Link to="/logeado">
            <button className="button is-ghost has-text-white is-size-4 has-text-weight-bold">
              {user.name}
            </button>
          </Link>
        )}

        {/* este link me manda al no se*/}

        <button
          onClick={handleLogout}
          className="button is-ghost has-text-white is-size-4 has-text-weight-bold"
        >
          LOGOUT
        </button>

        {/* este link me manda al usuarios*/}
        <Link to="/user">
          <button className="button is-ghost has-text-white is-size-4 has-text-weight-bold">
            USUARIOS
          </button>
        </Link>
      </div>

      <div className="navbar-item navbar-end"></div>
    </nav>
  );
};

export default Navbar;
