const {Model} = require("sequelize");
class ToHits extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        toHitID:{
          type: DataTypes.INTEGER,
          allowNull: false,          
          autoIncrement: true,
          primaryKey: true
        },
        toHitOrder: {type:DataTypes.INTEGER},
        toHitDesc:{type: DataTypes.STRING},
        damage:{type: DataTypes.STRING},
        critRange:{type: DataTypes.STRING},
        critDamage:{type: DataTypes.STRING}
      },
      {sequelize, tableName: "tohits"}
    );
  }
}

module.exports = ToHits;