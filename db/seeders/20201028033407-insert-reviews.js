'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          title: 'review 1',
          description: 'nice place',
          rating: 4,
          userId: 1,
          homeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 2',
          description: 'nice place',
          rating: 4,
          userId: 1,
          homeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 3',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 4',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 5',
          description: 'nice place',
          rating: 4,
          userId: 2,
          homeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'review 6',
          description: 'nice place',
          rating: 3,
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
