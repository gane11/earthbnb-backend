'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: 'Aleksandar',
          lastName: 'Dordevic',
          email: 'testerone@test.com',
          hashedPassword: bcrypt.hashSync('password123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Tester',
          lastName: 'One',
          email: 'testertwo@test.com',
          hashedPassword: bcrypt.hashSync('password1234', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Visitor',
          lastName: 'Demo',
          email: 'demo@dftm.com',
          hashedPassword: bcrypt.hashSync('demo123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
