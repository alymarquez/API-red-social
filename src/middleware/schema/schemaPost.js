const Joi = require('joi');

const schemaPost_Images = require('./schemaPost_Images');

const postSchema = Joi.object({
    userId: Joi.number()
        .integer()
        .required(),

    content: Joi.string()
        .min(3)
        .max(250)
        .required(),
    
    titulo: Joi.string()
        .min(3)
        .max(20)
        .required(),
    
    imagenes: Joi.array()
        .items(schemaPost_Images)
        .max(5)
        .optional()
});

module.exports = postSchema;