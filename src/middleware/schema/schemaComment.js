const Joi = require('joi');

const commentSchema = Joi.object({
    postId: Joi.number()
        .integer()
        .required(),
    
    userId: Joi.number()
        .integer()
        .required(),

    comment: Joi.string()
        .min(4)
        .max(250)
        .required()
});

module.exports = commentSchema;