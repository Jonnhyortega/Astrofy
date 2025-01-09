# Bibliotecas
- npm install typescript nodemon bcryptjs  dotenv express  jsonwebtoken mongoose  randomstring nodemailer cors express-validator
# Types
- npm install --save-dev @types/bcryptjs @types/express  @types/jsonwebtoken @types/randomstring  @types/nodemailer  @types/cors

- npm init -y
- tsc --init

# Configuración de gmail para nodemailer

myaccount.google.com/apppasswords

# Datos para el .env

# VARIABLES DE ENTORNO
DB_URL = "mongodb+srv://jonnhyortega:pedrogarcia5602@cluster0.k1hnt.mongodb.net"
PORT = 8080
CLAVE_SECRETA= PEDROGARCIA5602
KEYFORADMIN=CLAVEADMIN
PASSNODEMAILER ="vlqx ivdi obgf lxtm"

# ENDPOINTS
url backend: https://astrofybackend-3.onrender.com

# /auth/register 
 Este endpoint recibe un body con email, name, password y el rol desde el header.

 # /api/products
 Haciendo get a esta url devuelve los productos.

# /auth/login
Recibe un body con email y password

# /auth/verify
Recibe body con email y codigo para verificar la cuenta

# /auth/verify-token
Recibe el token en el header con la clave "x-token" para validar el token

# /auth/change-password
Recibe un body con email, password y el nuevo password

# /orders/create-order
Recibe un body con los datos de las ordenes

# /orders/all-orders
Recibe en el params el _id del objectId del usuario ya registrado 

# /auth/change-name
Recibe name y email en el body


