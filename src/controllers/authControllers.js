import { signInService } from "../services/authServices.js";

export async function signInController(req, res) {
  const response = await signInService(req.body);
  return res.send(response);
}
