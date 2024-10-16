import userRepository from "../database/repositories/userRepository.js";

export async function signInService(data) {
  try {
    const user = await userRepository.getUser(data.usuario, data.senha);
    return { token: "meulindotoken", usuario: user };
  } catch (error) {
    console.error(error);
  }
}
