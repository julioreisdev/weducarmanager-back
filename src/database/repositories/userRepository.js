async function getUser(usuario, senha) {
  return { usuario, senha };
}

const userRepository = {
  getUser,
};

export default userRepository;
