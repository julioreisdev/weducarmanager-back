import Joi from "joi";

export const signInSchema = Joi.object({
  usuario: Joi.string().required().messages({
    "string.base": "O campo usuário deve ser um texto",
    "string.empty": "O campo usuário não pode estar vazio",
    "any.required": "O campo usuário é obrigatório",
  }),
  senha: Joi.string().required().messages({
    "string.base": "O campo senha deve ser um texto",
    "string.empty": "O campo senha não pode estar vazio",
    "any.required": "O campo senha é obrigatório",
  }),
});
