const Joi = require('joi')

const updateImageSchema = Joi.object({
    url: Joi.string().uri().required()
})

module.exports = updateImageSchema