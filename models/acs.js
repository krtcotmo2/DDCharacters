const { Model } = require('sequelize');

class AC extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        acID: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        charID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        sortValue: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        acDesc: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "acs"}
    )
  }
}

module.exports = AC; 