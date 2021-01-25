'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          description: 'nice place',
          userId: 1,
          homeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'nice place',
          userId: 1,
          homeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'nice place',

          userId: 2,
          homeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'nice place',
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'nice place',
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: 'nice place',
          userId: 2,
          homeId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews');
  }
};
