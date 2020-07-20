const { Model } = require('sequelize');

class NoteItem extends Model {
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        noteID: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        itemOrder: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        itemDetails: {
          type: DataTypes.STRING,
          allowNull: true
        },
      },
      {sequelize, tableName: "noteitems"}
    )

  }

}

module.exports = NoteItem; 