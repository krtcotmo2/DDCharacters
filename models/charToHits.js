const { Model } = require('sequelize');

class CharToHits extends Model{
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
            allowNull: false
        },
        toHitID: {
          type: DataTypes.INTEGER,
            allowNull: false
        },
        score: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        isBase: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        },
        isMod: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        },
        modDesc: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "charToHits"}
    )
  }
}

module.exports = CharToHits; 