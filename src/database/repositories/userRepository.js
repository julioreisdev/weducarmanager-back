import connection from "../connection.js";

async function getUser(usuario, senha) {
  const user = await connection.query("select * from usuarios;");
  return { user };
}

const userRepository = {
  getUser,
};

export default userRepository;
