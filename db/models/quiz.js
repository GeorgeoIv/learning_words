const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Word }) {
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });

      this.belongsTo(Word, {
        foreignKey: 'word_id',
      });
    }
  }
  Quiz.init({
    user_id: DataTypes.INTEGER,
    word_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};
