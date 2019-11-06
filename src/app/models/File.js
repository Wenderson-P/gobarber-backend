import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        // Não precisa ser reflexo da base de dados
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default File;
