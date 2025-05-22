const commentSchema = require('./schema/schemaComment')

const validarComment = (req,res,next) => {
    const { error } = commentSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Error al crear el comentario",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = validarComment