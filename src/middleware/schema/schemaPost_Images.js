const Joi = require('joi');

const postImagesSchema = Joi.object({
    postId: Joi.number()
        .integer(),
    
    url: Joi.string()
        .uri()
        .required()
});

module.exports = postImagesSchema;