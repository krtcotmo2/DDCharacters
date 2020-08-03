const { Model } = require('sequelize');

class CharSpell extends Model{
  static init(sequelize, DataTypes){
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        spellID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        charID: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        spellLevel: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        spellName: {
          type: DataTypes.INTEGER,
            allowNull: true
        },
        isCast: {
          type: DataTypes.BOOLEAN,
            allowNull: true
        }
      },
      {sequelize, tableName: "charspells"}
    )
  }
}

module.exports = CharSpell; 