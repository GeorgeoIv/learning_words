const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Quiz }) {
      this.belongsTo(Theme, {
        foreignKey: 'theme_id',
      });
      this.hasMany(Quiz, {
        foreignKey: 'word_id',
      });
    }
  }
  Word.init({
    rus: DataTypes.STRING,
    eng: DataTypes.STRING,
    img: DataTypes.STRING,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
