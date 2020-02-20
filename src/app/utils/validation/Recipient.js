import * as Yup from 'yup';

class RecipientValidation {
  async validate(body, event) {
    let schema;
    if (event === 'create') {
      schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string(),
        street: Yup.string().required(),
        complement: Yup.string().notRequired(),
        state: Yup.string().required(),
        city: Yup.string().required(),
        zipcode: Yup.string().required(),
      });
    }

    if (event === 'update') {
      schema = Yup.object().shape({
        name: Yup.string().notRequired(),
        email: Yup.string(),
        street: Yup.string().notRequired(),
        complement: Yup.string().notRequired(),
        state: Yup.string().notRequired(),
        city: Yup.string().notRequired(),
        zipcode: Yup.string().notRequired(),
      });
    }

    return await schema.isValid(body);
  }
}

export default new RecipientValidation();
