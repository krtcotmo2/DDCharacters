const { Model } = require('sequelize');

class Feat extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
            allowNull: true
        }
        ,
        shortdescription: {
          type: DataTypes.STRING,
            allowNull: true
        }
        ,
        prerequisites: {
          type: DataTypes.STRING,
            allowNull: true
        }
        ,
        prerequisitie_feats: {
          type: DataTypes.STRING,
            allowNull: true
        }
        ,
        benefit: {
          type: DataTypes.STRING,
            allowNull: true
        }
        ,
        normal: {
          type: DataTypes.STRING,
            allowNull: true
        },
        special: {
          type: DataTypes.STRING,
            allowNull: true
        },
        type: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "feats"}
    )
  }
}

module.exports = Feat; 