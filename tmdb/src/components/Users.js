import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios
      .get("/api/user")
      .then((usuarios) => usuarios.data)
      .then((usuario) => setUsers(usuario))
      .catch((error) => console.log(error));
  }, []);

  return users[0] ? (
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {users.map((usuario) => {
          return (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.email}</td>
              <td>{usuario.edad}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h2 className="text-warning has-text-centered is-size-2 has-text-weight-bold">
      No hay usuarios en la base de datos
    </h2>
  );
};
export default Users;
