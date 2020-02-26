import Deliveryman from '../models/Deliveryman';
import DeliverymanValidation from '../utils/validation/Deliveryman';

class DeliverymanController {
  async store(req, res) {
    if (!(await DeliverymanValidation.validate(req.body, 'create')))
      return res.status(400).json({ error: 'Validation error' });

    const deliveryman = await Deliveryman.create(req.body);

    return res
      .status(201)
      .json({ message: 'Deliveryman successfully created!', deliveryman });
  }

  async update(req, res) {
    const { id } = req.params;
    if (!(await DeliverymanValidation.validate(req.body, 'update')))
      return res.status(400).json({ error: 'Validation error' });
    try {
      const [deliveryman] = await Deliveryman.update(req.body, {
        where: { id },
      });

      if (!deliveryman) return res.status(404).json({ error: 'Not found!' });

      return res
        .status(200)
        .json({ message: 'Deliveryman successfully updated!' });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deliveryman = await Deliveryman.findByPk(id);

      if (!deliveryman) return res.status(404).json({ error: 'Not found!' });

      deliveryman.is_active = false;

      await deliveryman.save();

      return res.status(200).json(deliveryman);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }

  async find(req, res) {
    const deliveryman = await Deliveryman.findAll();
    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
