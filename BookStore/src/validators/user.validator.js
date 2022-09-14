import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    FullName: Joi.string().min(3).required(),
    EmailId:Joi.string().min(3).required(),
    Password: Joi.string().min(3).required(),
    PhoneNo: Joi.string().min(3).required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
