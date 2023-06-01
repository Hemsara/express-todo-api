import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

export const validateRegistration = (req: Request, res: Response, next: NextFunction) => {
    const bodySchema = Joi.object({
      title: Joi.string().required(),
     
    });
  

    const { error: bodyError } = bodySchema.validate(req.body);

  
    if (bodyError) {
      const bodyErrorMessage = bodyError.details.map((details) => details.message).join(', ');
      return res.send({
        message: bodyErrorMessage,
        status: 400,
      });
    }
  
  
  
    next();
  };

  export default validateRegistration;