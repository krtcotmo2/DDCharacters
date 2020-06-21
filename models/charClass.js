const {Model} = require("sequelize");
class CharClass extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        classID:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        className:{
          type: DataTypes.STRING,
          allowNull: true
        },
        classHD:{
          type: DataTypes.INTEGER,
          allowNull: true
        },
        createdAt:{
          type: DataTypes.DATE,
          allowNull: true
        },
        updatedAt:{
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {sequelize, tableName: "classes"}
    );
  }
}

module.exports = CharClass;