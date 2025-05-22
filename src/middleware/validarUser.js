const userSchema = require('./schema/schemaUser')

const validarUser = (req,res,next) => {
    const { error } = userSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Datos inválidos",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = validarUser
