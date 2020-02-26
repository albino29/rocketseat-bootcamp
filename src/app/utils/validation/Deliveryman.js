import * as Yup from 'yup';

class DeliverymanValidation {
  async validate(body, event) {
    let schema;
    if (event === 'create') {
      schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string(),
      });
    }

    if (event === 'update') {
      schema = Yup.object().shape({
        name: Yup.string().notRequired(),
        email: Yup.string(),
      });
    }

    return schema.isValid(body);
  }
}

export default new DeliverymanValidation();
