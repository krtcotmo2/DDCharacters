const {Model} = require("sequelize");
class Race extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        raceID:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        raceDesc:{
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {sequelize, tableName: "race"}
    );
  }
}

module.exports = Race;