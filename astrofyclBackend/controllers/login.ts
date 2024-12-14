import { Response, Request } from "express";
import User, { IUser } from "../models/usuario";
import bcrypt from "bcryptjs";
import generateJWT from "../helpers/tokenGenerator";
import picocolors from "picocolors";
import { sendEmail } from "../mailer/mailer";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: IUser = req.body;

  try {
    const usuario = await User.findOne({ email });

    if (usuario) {
      // COMPARE PASSWORD USER WITH PASSWORD ENCRIPTED
      const passwordValidate = bcrypt.compareSync(password, usuario.password);
      if (!passwordValidate) {
        res.status(400).json({
          msg: "Contraseña incorrecta",
        });
        return;
      }

      if (!Boolean(usuario.verified)) {
        await sendEmail(email, usuario.code as string);
        res.status(400).json({
          msg: `Por favor verifique la cuenta para poder ingresar le hemos enviado nuevamente el codigo a ${email}`,
        });
        return;
      }

      const token = await generateJWT(usuario.id);
      res.json({
        usuario,
        token,
        msg: "Las contraseñas coincidieron",
      });
      console.log(picocolors.bgRed("Credenciales correctas 😎"));
      return;
    }

    res.status(400).json({
      msg: "No se encontro el email en la base de datos ¿Lo escribiste bien?",
    });
    return;
  } catch (error) {
    console.log(error);
    console.log(picocolors.bgRed("Error al identificar al usuario"));
  }
};
