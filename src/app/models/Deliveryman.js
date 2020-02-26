import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        is_active: Sequelize.STRING,
      },
      { sequelize, tableName: 'deliveryman' }
    );

    this.addHook('beforeCreate', deliveryman => {
      deliveryman.is_active = true;
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Deliveryman;
