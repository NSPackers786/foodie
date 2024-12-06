import React, { useState } from 'react';

const FoodAndHotelPlaces = () => {
  const [selectedFoodType, setSelectedFoodType] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedSort, setSelectedSort] = useState('asc');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    // Vada Pav places with city, ratings, and image
    {
      name: 'Shree Vada Pav',
      description: 'Famous for crispy vada pav, served with spicy chutney.',
      price: 30,
      foodType: 'Vada Pav',
      location: { lat: 19.0760, lon: 72.8777 },
      city: 'Mumbai',
      rating: 4.5,
      image: '/img/vada-pav.jpg',
    },
    {
      name: 'Vada Pav House',
      description: 'Known for their soft pav and fresh vada.',
      price: 25,
      foodType: 'Vada Pav',
      location: { lat: 19.0950, lon: 72.8850 },
      city: 'Mumbai',
      rating: 4.2,
      image: '/img/vada-pav.jpg',
    },
    // Other food types
    {
      name: 'Pav Bhaji Place',
      description: 'Known for buttery pav bhaji with special masala.',
      price: 50,
      foodType: 'Pav Bhaji',
      location: { lat: 19.0870, lon: 72.8760 },
      city: 'Pune',
      rating: 4.0,
      image: '/img/pav-bhaji.jpg',
    },
    {
      name: 'Pizza Hut',
      description: 'Famous for delicious pizzas with extra cheese.',
      price: 300,
      foodType: 'Pizza',
      location: { lat: 19.0950, lon: 72.8700 },
      city: 'Mumbai',
      rating: 4.7,
      image: '/img/pizza.jpg',
    },
    {
      name: 'Burger King',
      description: 'Tasty burgers with crispy fries.',
      price: 200,
      foodType: 'Burger',
      location: { lat: 19.0800, lon: 72.8780 },
      city: 'Mumbai',
      rating: 4.3,
      image: '/img/burger.jpg',
    },
    // Hotel Places
    {
      name: 'Grand Hotel',
      description: 'Luxury hotel with modern amenities and a beautiful view.',
      price: 5000,
      foodType: 'Hotel',
      location: { lat: 19.1000, lon: 72.8800 },
      city: 'Mumbai',
      rating: 4.8,
      image: '/img/grand-hotel.jpg',
    },
    {
      name: 'Budget Inn',
      description: 'Affordable and comfortable budget accommodation.',
      price: 1500,
      foodType: 'Hotel',
      location: { lat: 19.0850, lon: 72.8765 },
      city: 'Pune',
      rating: 3.9,
      image: '/img/budget-inn.jpg',
    },
  ];

  // Filtering places by selected food type, price range, and city
  const filteredPlaces = places.filter((place) => {
    return (
      (selectedFoodType === 'All' || place.foodType === selectedFoodType) &&
      (selectedCity === 'All' || place.city === selectedCity) &&
      place.price >= selectedPriceRange[0] &&
      place.price <= selectedPriceRange[1]
    );
  });

  // Sorting places by price (ascending/descending)
  const sortedPlaces = filteredPlaces.sort((a, b) => {
    return selectedSort === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const handleViewOnMap = (place) => {
    setSelectedPlace(place);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Best Food and Hotels in Your City</h2>

      {/* Filter Section */}
      <div className="flex justify-between mb-8">
        {/* Food Type Filter */}
        <div>
          <label className="mr-2">Food Type:</label>
          <select
            className="p-2 rounded"
            value={selectedFoodType}
            onChange={(e) => setSelectedFoodType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Vada Pav">Vada Pav</option>
            <option value="Pav Bhaji">Pav Bhaji</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Hotel">Hotel</option>
          </select>
        </div>

        {/* City Filter */}
        <div>
          <label className="mr-2">City:</label>
          <select
            className="p-2 rounded"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
          </select>
        </div>

     

       
      </div>
      <div className='flex justify-center items-center gap-3 pb-5'>
  {/* Price Range Filter */}
  <div>
    <label className="mr-2">Price Range:</label>
    <input
      type="range"
      min="0"
      max="10000"
      value={selectedPriceRange[1]}
      onChange={(e) => setSelectedPriceRange([selectedPriceRange[0], e.target.value])}
      className="w-32"
    />
    <span className="ml-2">{selectedPriceRange[0]} - {selectedPriceRange[1]}</span>
  </div>
  
  {/* Sort by Price */}
  <div>
    <label className="mr-2">Sort by Price:</label>
    <select
      className="p-2 rounded"
      value={selectedSort}
      onChange={(e) => setSelectedSort(e.target.value)}
    >
      <option value="asc">Low to High</option>
      <option value="desc">High to Low</option>
    </select>
  </div>
</div>

      {/* Display Places */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPlaces.map((place, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {/* Displaying Image */}
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-red-500">{place.name}</h3>
            <p className="text-gray-600">{place.description}</p>
            <p className="font-bold text-red-500 mt-2">₹{place.price}</p>
            <p className="text-sm text-gray-500">Food Type: {place.foodType}</p>
            <p className="text-sm text-gray-500">City: {place.city}</p>
            <p className="text-sm text-yellow-500">Rating: {place.rating} ★</p>
            <button
              onClick={() => handleViewOnMap(place)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              View on Map
            </button>
          </div>
        ))}
      </div>

      {/* Map Display */}
      {selectedPlace && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-4">Location: {selectedPlace.name}</h3>
          <div className="h-64 w-full">
            <iframe
              title="Food/Hotel Map"
              className="w-full h-full"
              frameBorder="0"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0193091516366!2d${selectedPlace.location.lon}!3d${selectedPlace.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b09a55af7%3A0xbba29be34d2b8a8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1676341234567!5m2!1sen!2sus`}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodAndHotelPlaces;
