import Joi from "joi";

export const validatorSchema = Joi.object({
    firstname: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.base': `"firstname" should be a type of 'text'`,
            'string.min': '"firstname" has to be least {#limit} characters.',
            'string.max': '"firstname" has to be max {#limit} characters.',
            'any.required': `"firstname" is a required field`,
        }),
    lastname: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.base': `"lastname" should be a type of 'text'`,
            'string.min': '"lastname" has to be least {#limit} characters.',
            'string.max': '"lastname" has to be max {#limit} characters.',
            'any.required': `"lastname" is a required field`,
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.base': `"email" should be a type of 'email'`,
            'string.min': '"email" has to be least {#limit} characters.',
            'string.max': '"email" has to be max {#limit} characters.',
            'any.required': `"email" is a required field`,
        }),
    password: Joi.string()
        .min(10)
        .required()
        .messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.min': '"password" has to be least {#limit} characters.',
            'string.max': '"password" has to be max {#limit} characters.',
            'any.required': `"password" is a required field`,
        })
})