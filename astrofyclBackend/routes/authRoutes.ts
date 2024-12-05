import { Router } from "express";
import { check } from "express-validator";
import { existingEmail } from "../helpers/validationsDB";
import { register } from "../controllers/auth";
import { searchErrors } from "../middleware/searchErrors";

const router = Router()

router.post("/register",[
    check("name", "el nombre es obligatoro").not().isEmpty(),
    check("email", "Formato incorrecto").isEmail(),
    check("password", "El password debe contener al menos 8 caracteres").isLength({min:6}),
    check("email").custom(existingEmail),
    searchErrors
],
register)

export default router