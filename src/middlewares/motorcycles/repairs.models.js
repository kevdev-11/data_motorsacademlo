const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');
// const { default: getDate } = require('date-fns/getDate');
const { format } = require('date-fns');
// const Users = require('../users/users.model');

const MotorcyclesInRepair = sequelize.define('motorcycles', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    get() {
      return format(this.getDataValue('date'), 'dd-MM-yyyy');
    },
    set(parseDate) {
      this.setDataValue('date', parseDate);
    }
  },
  status: {
    type: DataTypes.ENUM('pending', 'cancelled', 'completed'),
    allowNull: false,
    defaultValue: 'pending'
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
    // foreignKey: {
    //     name: 'user_Id',
    //     references: {
    //         model: Users,
    //         key: 'id'
    //     }

    // }
  }
});


module.exports = MotorcyclesInRepair;
