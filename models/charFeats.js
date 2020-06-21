const { Model } = require('sequelize');

class CharFeat extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        featID: {
          type: DataTypes.INTEGER,
            allowNull: true
        }
        ,
        charID: {
          type: DataTypes.INTEGER,
            allowNull: true
        }
      },
      {sequelize, tableName: "charfeats"}
    )
  }
}

module.exports = CharFeat; 