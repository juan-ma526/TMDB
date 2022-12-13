import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleLastname = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/user/register", {
        nombre: name,
        apellido: lastname,
        password: password,
        email: email,
        edad: age,
      })
      .then((res) => console.log("creado con exito"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form>
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" onChange={handleName}></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Apellido</label>
          <div class="control">
            <input class="input" type="text" onChange={handleLastname}></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Constraseña</label>
          <div class="control">
            <input
              class="input"
              type="password"
              onChange={handlePassword}
            ></input>
          </div>
        </div>

        <div class="field ">
          <label class="label">Email</label>
          <div class="control ">
            <input class="input " type="email" onChange={handleEmail}></input>
          </div>
        </div>

        <div class="field">
          <label class="label">Edad</label>
          <div class="control">
            <input class="input" type="number" onChange={handleAge}></input>
          </div>
        </div>

        <button
          class="btn btn-primary is-size-5 button is-info is-rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Register;
