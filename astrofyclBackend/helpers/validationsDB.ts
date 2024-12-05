import User, { IUser } from "../models/usuario";

export const existingEmail = async (email: string): Promise<void> => {
  const emailExist: IUser | null = await User.findOne({ email });
  if (emailExist) {
    throw new Error(`El correo ${email} ya esta registrado`);
  }
};
