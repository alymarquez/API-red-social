const tagSchema = require('./schema/schemaTag')

const validarTag = (req,res,next) => {
    const { error } = tagSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Error al crear el tag",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = validarTag