const { Model } = require('sequelize');

class Alignments extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        alignID: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        alignName: {
          type: DataTypes.STRING,
            allowNull: true
        }
      },
      {sequelize, tableName: "alignments"}
    )
  }
}

module.exports = Alignments; 