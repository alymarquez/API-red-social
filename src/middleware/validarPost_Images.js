const postImagesSchema = require('./schema/schemaPost_Images')
const updateImageSchema = require('./schema/schemaUpdateImage')

const validarPostImages = (req,res,next) => {
    const { error } = postImagesSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "El campo postId es obligatorio o no se han proporcionado archivos",
            error: error.details[0].message
        })
    }
    next()
}

const validarActualizarImagen = (req,res,next) => {
    const { error } = updateImageSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "El campo url debe ser una dirección válida",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = {
    validarPostImages,
    validarActualizarImagen
}
