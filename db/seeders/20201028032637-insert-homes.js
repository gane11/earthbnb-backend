'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Homes",
      [
        {
          name: 'Mira Beach House',
          city: 'Miami',
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
          city: 'Miami',
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
          city: 'Miami',
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
          city: 'Miami',
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
          name: 'Miami Beach Villa 4',
          city: 'Miami',
          state: 'Florida',
          lng: -80.1451287,
          lat: 25.7804518,
          price: 1000,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-5.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Miami Beach Villa 5',
          city: 'Miami',
          state: 'Florida',
          lng: -80.1476506,
          lat: 25.7865992,
          price: 1000,
          description: `This mansion is located in the most renowned and luxurious 
          area of Miami; featuring 5 bedrooms along with a designated suite, as well as 5.5 bathrooms, 
          a full kitchen with large dining room, pool, and outdoor lounge area!. 
          Only minutes away from the beach, nightlife, Lincoln Road Mall, and Ocean Drive - this home 
          is truly something special for your next getaway!

          Please feel free to contact me with any questions or anything else on your mind!
           If you are interested in booking contact me ASAP!`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-mansion-6.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-4.jpeg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/miami-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //nY
        
        {
          name: 'Chelsea penthouse',

          city: 'New York',
          state: 'New York',
          lng: -74.003778,
          lat: 40.749669,
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
          price: 2000,
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
          price: 1500,
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
        {
          name: 'Downtown Manhaten Penthouse 2',
          city: 'New York',
          state: 'New York',
          lng: -73.9978247,
          lat: 40.737422,
          price: 1400,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-5.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Manhaten Penthouse 3',
          city: 'New York',
          state: 'New York',
          lng: -73.9956467,
          lat: 40.7411167,
          price: 1350,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-penthouse-6.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/ny-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ///austin
        {
          name: 'Downtown Austin Apartmant',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7611536,
          lat: 30.2666092,
          price: 300,
          description: `Stay for 30+ nights (minimum nights and rates are FIRM) where you’ll
           have the entire apartment all to yourself at Ashton Austin. The apartment has beautiful
            finishes and comes fully outfitted with kitchen, bedroom, & bathroom essentials. Please note, 
            the furnishings & room details WILL VARY as the unit is set up for you upon booking. We are an 
            experienced professional hospitality company that works directly with the property to transform 
            vacant units into your home away from home.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-1.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Austin Apartmant 2',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7611536,
          lat: 30.2666092,
          price: 320,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-2.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Austin Apartmant 3',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7611536,
          lat: 30.2666092,
          price: 250,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-3.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Austin Apartmant 4',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7611536,
          lat: 30.2666092,
          price: 350,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-4.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Austin Apartmant 5',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7635025,
          lat: 30.2659339,
          price: 322,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-5.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown Austin Apartmant 6',
          city: 'Austin',
          state: 'Texas',
          lng: -97.7635025,
          lat: 30.2659339,
          price: 243,
          description: `Located in a high rise building in the highly desirable Westside 
          midtown with private elevator into your penthouse suite. The balcony offers 
          breathtaking city view that not many other condo can match. Professionally
           decorated interior with cozy and spacious atmoshphere. Shopping, Time square
          Only blocks away

          Private elevator directly into your penthouse suite with four bedrooms and 2 
          bathrooms and views to die also enjoy your own private balcony overlooking City.. 
          gourmet kitchen top of the line appliances fully equipped kitchen also with everything
           you can imagine we also give our guests complementary bottled water chocolate champagne Nespresso coffee`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-apa-6.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-2.jpeg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/austin/austin-image-5.jpg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ////////////////////////////////la
        {
          name: 'Los Angeles Mansion',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.389422,
          lat: 34.09764,
          price: 5000,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-1.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Los Angeles Mansion 2',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.395272,
          lat: 34.0877906,
          price: 4000,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-2.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Los Angeles Mansion 3',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.395272,
          lat: 34.0877906,
          price: 2000,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-3.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Los Angeles Mansion 4',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.395272,
          lat: 34.0877906,
          price: 1500,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-4.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Los Angeles Mansion 5',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.395272,
          lat: 34.0877906,
          price: 5000,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-5.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Los Angeles Mansion 6',
          city: 'Los Angeles',
          state: 'California',
          lng: -118.395272,
          lat: 34.0877906,
          price: 3000,
          description: `Modern construction, $7m 6,500 sq ft, Hollywood Hills Sanctuary 
          home perfect for 14-16 guests. Featuring new jetted hot tub, theater, 5 bedrooms 
          with en suite bathrooms, 6 baths, several view-side balconies, rooftop hot tub, 
          BBQ, 3 car garage + 3 car driveway (parking for 6 on property + ample street parking).
          6 bedrooms (3 king, 3 queen beds), 2 living rooms (4 sofas), theater (sofas sleep 3-4).

        This house I truly defines the essence of the Hollywood Hills. Spectacular-views from 
        downtown Los Angeles to the beaches of Santa Monica & Polos Verdes. The house is 
        decorated tastefully with an edgy/modern comfortable feel, has a full movie theatre 
        with an extra full sofa pull out memory foam bed, also a jacuzzi to soak in as you gaze out over the city.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-mansion-6.jpeg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/la/la-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //san fran
        {
          name: 'Downtown San Francisco Penthouse',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 10000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-1.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown San Francisco Penthouse 2',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 20000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-2.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown San Francisco Penthouse 3',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 23000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-3.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown San Francisco Penthouse 4',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 30000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-4.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown San Francisco Penthouse 5',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 15000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-5.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
          hostId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Downtown San Francisco Penthouse 6',
          city: 'San Francisco',
          state: 'California',
          lng: -122.4104862,
          lat: 37.7868413,
          price: 24000,
          description: `Downtown San Francisco Penthouse with rooftop terrace takes full advantage of 
          its dramatic views from the Bay Bridge to Twin Peaks and allows residents a remarkable 
          space to entertain. This 3 bedroom, 3.5 bathroom penthouse is ideal for the vacation reantail people
           excited about enjoying the best of San Francisco. Corner great room with gas fireplace and formal dining.
            Gourmet open kitchen with island and adjacent family room. Suite of Miele appliances including 6 burner 
            gas range, double oven, two dishwashers, Sub-zero refrigerator, and full-height wine refrigerator. Corner 
            master bedroom suite with expansive walk-in closet and custom home office, windowed spa-like dual master bath.
             Guest bedrooms with en suite baths. Laundry room with sink a side-by-side washer/dryer. Service entry.
              SF's newest luxury condo tower, developed by Related, designed by OMA, The Avery offers lifestyle of
               amenities and services including attended lobby, valet parking, fitness studio, pool, entertainment lounges & more.`,
          image: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-penthouse-6.jpg',
          image2: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-2.jpg',
          image3: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-3.jpg',
          image4: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-4.jpg',
          image5: 'https://earhbnb0images.s3.us-east-2.amazonaws.com/sanfran/sf-image-5.jpeg',
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
