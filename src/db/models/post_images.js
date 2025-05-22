'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'postId' });
    }
  }
  Post_Images.init({
    url: DataTypes.STRING,
    postId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Posts',
          key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Post_Images',
  });
  return Post_Images;
};