'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {

    description: {
      type: DataTypes.TEXT
    },

    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    homeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Homes' }
    },
  }, {});
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Users, { foreignKey: "userId" });
    Reviews.belongsTo(models.Homes, { foreignKey: "homeId" });
  };
  return Reviews;
};