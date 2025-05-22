'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: 'userId' });
      this.hasMany(models.Comment, { foreignKey: 'userId' });

      this.belongsToMany(User, {
        as: 'Seguidores',
        through: 'Follower',
        foreignKey: 'seguidoId'
      });

      this.belongsToMany(User, {
        as: 'Seguidos',
        through: 'Follower',
        foreignKey: 'userId'
      });
  
    }
  }
  User.init({
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};