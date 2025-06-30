'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        through: 'Follower',
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });

      this.hasMany(models.Post_Images, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
        hooks: true
      });

      this.hasMany(models.Comment, {
        foreignKey: 'postId',
        onDelete: 'CASCADE',
        hooks: true
      });

      this.belongsToMany(models.Tag, {
        through: 'PostTag',
        foreignKey: 'postId',
        hooks: true
      })
    }
  }
  Post.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
          model: 'Users',
          key: 'id'
        }
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};