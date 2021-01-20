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
          lng: -80.158542,
          lat: 25.794824,
          price: 1000,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
         
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-1.jpg',
          image2:'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3:'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4:'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5:'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Despot Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lng: -80.154295,
          lat: 25.793312,
          price: 1200,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-2.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa',
          city: 'Miami Beach',
          state: 'Florida',
          lng: -80.141007,
          lat: 25.773452,
          price: 1500,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-3.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa 2',
          city: 'Miami Beach',
          state: 'Florida',
          lng: -80.142788,
          lat: 25.781623,
          price: 1000,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-4.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse',

          city: 'New York',
          state: 'New York',
          lng: -74.003778,
          lat: 40.749669,
          price: 1000,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-1.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 2',
          city: 'New York',
          state: 'New York',
          lng: -74.002748,
          lat: 40.747328,
          price: 1000,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image:'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-2.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Chelsea penthouse 3',
          city: 'New York',
          state: 'New York',
          lng: -74.000184,
          lat: 40.750799,
          price: 1000,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-3.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Manhaten Penthouse',
          city: 'New York',
          state: 'New York',
          lng: -73.983876,
          lat: 40.739651,
          price: 3000,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-4.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
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
