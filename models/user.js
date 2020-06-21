const {Model} = require("sequelize");

class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        userID:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        userName:{
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      {sequelize, tableName: "users"}
    );
  }
}




module.exports = User;