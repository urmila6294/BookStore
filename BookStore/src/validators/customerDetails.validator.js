import Joi from '@hapi/joi';

export const customerDetailsValidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).required(),
        phoneNumber: Joi.string().length(10).required(),
        pincode: Joi.string().length(6).required(),
        locality: Joi.string().required(),
        fullAddress: Joi.string().required(),
        city: Joi.string().min(2).required(),
        state: Joi.string().min(2).required(),
        landmark: Joi.string().min(2).required(),
        addressType: Joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
};