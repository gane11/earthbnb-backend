'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          name: 'Mira Beach House',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.158542,
          lng: 25.794824,
          price: 1000,
          description: 'Beatufull beach front Villa',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Despot Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.154295,
          lng: 25.793312,
          price: 1200,
          description: 'Beatufull beach front',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.141007,
          lng: 25.773452,
          price: 1500,
          description: 'Beatufull beach front Villa',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa 2',
          city: 'Miami Beach',
          state: 'Florida',
          lat: -80.142788,
          lng: 25.781623,
          price: 1000,
          description: 'Beatufull beach front Villa 2',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse',

          city: 'New York',
          state: 'New York',
          lat: -74.003778,
          lng: 40.749669,
          price: 1000,
          description: 'Luxurious penthouse',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 2',
          city: 'New York',
          state: 'New York',
          lat: -74.002748,
          lng: 40.747328,
          price: 1000,
          description: 'Luxurious penthouse 2',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 3',
          city: 'New York',
          state: 'New York',
          lat: -74.000184,
          lng: 40.750799,
          price: 1000,
          description: 'Luxurious penthouse 3',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Manhaten Penthouse',
          city: 'New York',
          state: 'New York',
          lat: -73.983876,
          lng: 40.739651,
          price: 3000,
          description: 'Luxurious penthouse 4',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Homes');
  }
};
