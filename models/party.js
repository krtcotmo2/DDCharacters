const {Model} = require("sequelize");

class Party extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        partyID:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        charID:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        curHP:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        partyDesc:{
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {sequelize, tableName: "parties"}
    )
  }
}

module.exports = Party