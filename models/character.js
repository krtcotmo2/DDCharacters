const {Model} = require("sequelize");
let User = require('./user');
let Race = require('./race');

class Character extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        charID:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        userID:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        charName:{
          type: DataTypes.STRING,
          allowNull: true
        },
        charHP:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        charXP:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        init:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        isDead:{
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        raceID:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        alignID:{
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {sequelize, tableName: "characters"}
    );
  }
}

module.exports = Character;