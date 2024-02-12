const Joi = require('joi')

const package = Joi.object().keys({
    available_places: Joi.number().required(),
    description: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    sale_price: Joi.number().required()
})

exports.validation = Joi.object({
  id: Joi.string().required(),
  currency: Joi.string().required(),
  date: Joi.string().required(),
  end_sale_date: Joi.string().allow(null),
  start_sale_date: Joi.string().allow(null),
  subType: Joi.string().required(),
  title: Joi.string().required(),
  packages: Joi.array().items(package).required()
})