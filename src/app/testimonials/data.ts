export const reviews = [
    {
      id: 1,
      name: "Emma",
      location: " Dubai",
      rating: 4,
      review: "We booked a family trip to Dubai, and it was nothing short of magical! The hotel, activities, and transport arrangements were flawless. Thank you for making it so special for us.",
      support: 5,
      hotels: 5,
      drivers: 5,
      experience: 5
    },
    {
      id: 2,
      name: "John",
      location: " Rajasthan",
      rating: 5,
      review: "A wonderful experience in Rajasthan! The historical sites and local culture were mesmerizing. The guides were very knowledgeable.",
      support: 5,
      hotels: 5,
      drivers: 5,
      experience: 5
    },
    {
      id: 3,
      name: "Sophia",
      location: " Goa",
      rating: 4,
      review: "Amazing beachside vacation! The hotel stay was comfortable, and the food was delicious. Would love to visit again.",
      support: 4,
      hotels: 5,
      drivers: 4,
      experience: 5
    },
    {
      id: 4,
      name: "Liam",
      location: " Kerala",
      rating: 1,
      review: "A peaceful and rejuvenating trip to Kerala. Houseboats and backwaters were the highlight of our journey.",
      support: 5,
      hotels: 5,
      drivers: 5,
      experience: 5
    },
    {
      id: 5,
      name: "Olivia",
      location: " Dubai",
      rating: 2,
      review: "Dubai is an architectural wonder! Loved every moment of the trip, especially the desert safari and Burj Khalifa visit.",
      support: 4,
      hotels: 5,
      drivers: 5,
      experience: 5
    },
  ];
  
  // Generating 45 more reviews with similar structure
  for (let i = 6; i <= 50; i++) {
    reviews.push({
      id: i,
      name: `Traveler ${i}`,
      location: ` ${["Dubai", "Goa", "Rajasthan", "Kerala"][i % 4]}`,
      rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4 and 5
      review: "An unforgettable experience! The services were excellent, and we had a fantastic time exploring the destination.",
      support: 5,
      hotels: 5,
      drivers: 5,
      experience: 5
    });
  }
  
  