const { Model } = require('sequelize');

class Skill extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        skillID: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        skillName: {
          type: DataTypes.STRING,
            allowNull: true
        },
        skillAttr: {
          type: DataTypes.STRING,
            allowNull: true
        },
        skillDesc: {
          type: DataTypes.STRING,
            allowNull: true
        },
        untrained: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        }
      },
      {sequelize, tableName: "skills"}
    )
  }
}

module.exports = Skill; 