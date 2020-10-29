'use strict';
module.exports = (sequelize, DataTypes) => {
  const Homes = sequelize.define('Homes', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    lat: {
      allowNull: false,
      type: DataTypes.FLOAT(10,6),
    },
    lng: {
      allowNull: false,
      type: DataTypes.FLOAT(10,6),
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hostId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },  
  
  }, {});
  Homes.associate = function(models) {
    Homes.belongsTo(models.Users, { foreignKey: "hostId" });
    Homes.hasMany(models.Reviews, { foreignKey: "homeId" });
    Homes.hasMany(models.Reservations, { foreignKey: "homeId" });
  };
  return Homes;
};