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
      from: "Verificacion de autenticidad de ASTROFYCL",
      to,
      subject: "Codigo de verificación para crear cuenta en ASTROFYCL",
      text: `Su código de autenticacion es: ${code}`,
    };

    await transporter.sendMail(mailOption);
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error("Error al enviar el correo", error);
  }
};
