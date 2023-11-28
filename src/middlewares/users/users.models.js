const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database')

const Users = sequelize.define('users', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(90),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('employee', 'client'),
    allowNull: false,
    defaultValue: 'client'
  },
  status: {
    type: DataTypes.ENUM('available', 'disabled'),
    allowNull: false,
    defaultValue: 'available'
  }
});

// Users.hasMany('motorcycles', {
//   foreignKey: 'user_id',
//   as: 'motorcycles',
//   sourceKey: 'id'
// });

module.exports = Users;
