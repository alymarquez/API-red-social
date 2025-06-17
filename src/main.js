const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./docs/swagger.yaml')
const cors = require('cors') 

require('dotenv').config()

const PORT = process.env.PORT || 3000

app.use(cors({ 
    origin: 'http://localhost:5173', // <-- ¡CAMBIA ESTO AL PUERTO DE TU FRONTEND!
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
 }));

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', require('./routes/userRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/archives', require('./routes/postImagesRoutes'));
app.use('/comments', require('./routes/commentRoutes'));
app.use('/tags', require('./routes/tagRoutes'));

app.listen(PORT, ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    console.log('Documentación en http://localhost:3000/api-docs')
})