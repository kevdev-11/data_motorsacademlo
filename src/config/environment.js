require('dotenv').config(); // para poder usar las variables de entorno

const env = require('env-var'); // para validar las variables de entorno

const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    URL_DB: env.get('API_URL').required().asUrlString()
}

module.exports = {envs};