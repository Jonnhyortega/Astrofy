import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jonnhyortega@gmail.com",
    pass: "vlqx ivdi obgf lxtm",
  },
  from: "nucbazappi3317@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  try {
    const mailOption = {
      from: "Verificación de autenticidad de ASTROFYCL",
      subject: "Codigo de verificación para crear cuenta en ASTROFYCL",
      text: `Su código de autenticacion es: ${code}, MUCHAS GRACIAS POR USAR MI APLICACION 😎👌`,
    };
    await transporter.sendMail(mailOption);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error("Error al enviar el correo", error);
  }
};

export const giveNotice = async (to: string): Promise<void> => {
  try {
    const AVISAR_AUTH = {
      from: "AVISO DE AUTENTICACION EN APLICACION ASTROFYCL",
      to: "jonnhyortega@gmail.com",  // Aquí especificamos tu correo como destinatario
      subject: "JONNHY SE AUTENTICARON EN ASTROFYCL",
      text: `El correo ${to} se autenticó en ASTROFYCL`,  // El correo del usuario autenticado sigue apareciendo en el mensaje
    };

    await transporter.sendMail(AVISAR_AUTH);
    console.log("Aviso de autenticación enviado a jonnhyortega@gmail.com");
  } catch (error) {
    console.error(
      "Error al enviar el aviso de autenticación por correo por el siguiente error: ",
      error
    );
  }
};
