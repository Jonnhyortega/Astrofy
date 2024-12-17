import { Request, Response } from "express";
import User from "../models/usuario";
import picocolors from "picocolors";

export const verifyUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email, code } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        msg: "No se encontro el usuario en la base de datos",
      });
      console.log(picocolors.redBright(`❌❌El usuario ${email} no se encuentra en la base de datos❌❌`))

      return;
    }
    if (user.verified) {
      res.status(400).json({
        msg: "El usuario ya ha sido verificado",
      });
      console.log(picocolors.bgWhiteBright(`❗El usuario ${email} ya se encuentra verificado❗`))

      return;
    }
    if (user.code !== code) {
      res.status(400).json({
        msg: "Código incorrecto",
      });
      return;
    }
    const userUpdated = await User.findOneAndUpdate(
      { email },
      { verified: true }
    );
    res.status(200).json({
      msg: "Usuario verificado con exito",
      userUpdated
    });
    console.log(picocolors.bgBlue(`🟡🟡El usuario ${email} ha sido verificado🟡🟡`))
  } catch (error) {
    console.log(error);
    console.log(picocolors.bgRed("Error en el servidor"));
    res.status(400).json({
      msg: "Error en el servidor",
    });
  }
};
