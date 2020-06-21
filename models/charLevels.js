const {Model} = require("sequelize");
class CharLevel extends Model {
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
          allowNull: false, 
        },
        classID:{
          type: DataTypes.INTEGER,
          allowNull: false,  
        },        
        classLevel:{
          type: DataTypes.INTEGER,
          allowNull: false, 
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
      {sequelize, tableName: "charLevels"}
    );
  }
}

module.exports = CharLevel;