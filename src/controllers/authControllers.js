export async function signInController(req, res) {
  return res.send({ message: "Login da Weducar!", data: req.body });
}
