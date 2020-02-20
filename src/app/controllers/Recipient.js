import Recipient from '../models/Recipient';
import RecipientValidation from '../utils/validation/Recipient';

class RecipientController {
  async store(req, res) {
    if (!(await RecipientValidation.validate(req.body, 'create')))
      return res.status(400).json({ error: 'Validation error' });

    const recipient = await Recipient.create(req.body);

    return res
      .status(201)
      .json({ message: 'Recipient successfully created!', recipient });
  }

  async update(req, res) {
    const { id } = req.params;
    if (!(await RecipientValidation.validate(req.body, 'update')))
      return res.status(400).json({ error: 'Validation error' });

    const [recipient] = await Recipient.update(req.body, {
      where: { id },
    });

    if (!recipient) return res.status(404).json({ error: 'Not found!' });

    return res.status(201).json({ message: 'Recipient successfully updated!' });
  }

  async find(req, res) {
    const recipient = await Recipient.findAll();
    return res.json(recipient);
  }
}

export default new RecipientController();
