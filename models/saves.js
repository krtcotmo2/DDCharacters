const { Model } = require('sequelize');

class Save extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        saveID: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        SaveDesc: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "saves"}
    )
  }
}

module.exports = Save; 