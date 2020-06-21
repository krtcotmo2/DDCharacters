const { Model } = require('sequelize');

class CharSkill extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        skillID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        charID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        score: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        isRanks: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isMod: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isClassSkill: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        },
        modDesc: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "charSkills"}
    )
  }
}

module.exports = CharSkill; 