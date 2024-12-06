import React, { useState } from "react";
import Map from "../components/MapView";
import ReviewForm from "../components/ReviewForm";

const CityFood = () => {
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [selectedFood, setSelectedFood] = useState(null);

  const cityFoods = {
    Mumbai: [
      { name: "Vada Pav", image: "/img/vada-pav.jpg", description: "Mumbai's most loved street food.", price: 20, rating: 4.5, location: { lat: 19.076, lon: 72.8777 } },
      { name: "Pav Bhaji", image: "/img/pav-bhaji.jpg", description: "Buttery pav served with spicy bhaji.", price: 80, rating: 4.8, location: { lat: 19.076, lon: 72.8777 } },
    ],
    Delhi: [
      { name: "Chole Bhature", image: "/img/chole-bhature.jpg", description: "Crispy bhature with spicy chole.", price: 100, rating: 4.7, location: { lat: 28.7041, lon: 77.1025 } },
      { name: "Aloo Tikki", image: "/img/aloo-tikki.jpg", description: "Crunchy tikkis served with chutneys.", price: 50, rating: 4.2, location: { lat: 28.7041, lon: 77.1025 } },
    ],
    Bangalore: [
      { name: "Masala Dosa", image: "/img/masala-dosa.jpg", description: "Crispy dosa filled with spicy potato masala.", price: 60, rating: 4.9, location: { lat: 12.9716, lon: 77.5946 } },
      { name: "Filter Coffee", image: "/img/filter-coffee.jpg", description: "Rich South Indian coffee.", price: 30, rating: 4.6, location: { lat: 12.9716, lon: 77.5946 } },
    ],
  };

  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <div
        className="w-full h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(/img/${selectedCity.toLowerCase()}.jpg), url(/img/default-city.jpg)`,
        }}
      >
        <h1 className="text-4xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
          Explore {selectedCity}'s Famous Foods
        </h1>
      </div>

      {/* City Selector */}
      <div className="container mx-auto py-8">
        <div className="flex justify-center space-x-4 overflow-hidden scroll-overflow-x">
          {Object.keys(cityFoods).map((city) => (
            <button
              key={city}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCity === city ? "bg-red-500 text-white" : "bg-gray-300 text-black"
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Food List */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cityFoods[selectedCity].map((food, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            onClick={() => setSelectedFood(food)}
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-red-500">{food.name}</h3>
              <p className="text-gray-600 my-2">{food.description}</p>
              <p className="text-red-600 font-bold">₹{food.price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">⭐</span>
                <span>{food.rating}/5</span>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map and Reviews */}
      {selectedFood && (
        <div className="container mx-auto mt-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-red-600">{selectedFood.name}</h2>
          <p className="text-gray-600">{selectedFood.description}</p>
          <Map latitude={selectedFood.location.lat} longitude={selectedFood.location.lon} />
          <ReviewForm onSubmit={(review) => console.log("New Review", review)} />
        </div>
      )}
    </div>
  );
};

export default CityFood;
