const Joi = require('joi');

const tagSchema = Joi.object({
    tag: Joi.string()
        .min(3)
        .max(20)
        .required()
});

module.exports = tagSchema;