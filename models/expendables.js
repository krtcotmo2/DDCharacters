const {Model} = require("sequelize");

class Expendable extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        charID:{
          type: DataTypes.INTEGER,
          allowNull: false
        },
        expType:{
          type: DataTypes.STRING,
          allowNull: true
        },
        description:{
          type: DataTypes.STRING,
          allowNull: true
        },
        qty:{
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {sequelize, tableName: "expendables"}
    );
  }
}

module.exports = Expendable;