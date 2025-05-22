//(FALTA VALIDACION DE UNIQUE Y DEMAS EN MODELS/USER)

const Joi = require('joi');

const userSchema = Joi.object({
    nickName: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    createdAt: Joi.date()
        .iso(),

    updatedAt: Joi.date()
        .iso()
});

module.exports = userSchema;