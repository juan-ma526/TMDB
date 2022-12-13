import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/user/login", { email, password })
      .then((respuesta) =>
        localStorage.setItem("user", JSON.stringify(respuesta.data))
      )
      .then(() => navigate("/logeado"))
      .catch(() => alert("Usuario no existe"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label class="label">email</label>
          <div class="control ">
            <input class="input" type="email" onChange={handleEmail}></input>
          </div>
        </div>

        <div class="field ">
          <label class="label">contraseña</label>
          <div class="control ">
            <input
              class="input"
              type="password"
              onChange={handlePassword}
            ></input>
          </div>
        </div>

        <button
          class="btn btn-primary is-size-5 button is-info is-rounded"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Login;
