const postSchema = require('./schema/schemaPost')

const validarPost = (req,res,next) => {
    const { error } = postSchema.validate(req.body)
    if(error){
        return res.status(500).json({
            message: "Error al crear la publicación",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = validarPost
