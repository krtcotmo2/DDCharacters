const { Model } = require('sequelize');

class Note extends Model {
  static init(sequelize, DataTypes){
    return super.init(
      {
        noteID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        charID: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        noteOrder: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        noteTitle: {
          type: DataTypes.STRING,
          allowNull: true
        },
      },
      {sequelize, tableName: "charnotes"}
    )

  }

}

module.exports = Note; 