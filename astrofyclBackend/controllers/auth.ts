import { Request, Response } from "express";
import User, { IUser } from "../models/usuario";
import bcrypt from "bcryptjs";
import { ROLES } from "../helpers/constants";
import randomstring from "randomstring";
import { sendEmail } from "../mailer/mailer";

export const register = async (req: Request, res: Response): Promise<void> => {

  const { name, email, password, rol }: IUser = req.body;
  const usuario = new User({ name, email, password, rol });

// PASSWORD ENCRIPTADO
  const salt = bcrypt.genSaltSync();
  usuario.password = bcrypt.hashSync(password, salt);

//   VERIFICACION DE ROL
  const adminKey = req.headers["admin-key"];
  if (adminKey === process.env.KEYFORADMIN) {
    usuario.rol = ROLES.admin;
  }
// CODIGO DE VERIFICACION
  const newCode = randomstring.generate(6);
  usuario.code = newCode;

  await usuario.save()
  await sendEmail(email, newCode)
  res.status(201).json({usuario})
};
