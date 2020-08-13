const { Model } = require('sequelize');

class CharEquip extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        charID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        equip: {
          type: DataTypes.STRING,
            allowNull: true
        },
        weight: {
          type: DataTypes.FLOAT,
            allowNull: true
        },
        location: {
          type: DataTypes.STRING,
            allowNull: true
        },
        equipOrder: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
      },
      {sequelize, tableName: "charequip"}
    )
  }
}

module.exports = CharEquip; 