// const Home = () => {
//   const foods = [
//     { name: "Pizza", image: "/img/pizza.jpg", description: "Cheesy and delicious pizza!" },
//     { name: "Burger", image: "/img/burger.jpg", description: "Juicy and flavorful burger!" },
//     { name: "Sushi", image: "/img/sushi.jpg", description: "Fresh and tasty sushi rolls!" },
//   ];

//   return (
//     <div id="home" className="bg-gray-100 min-h-screen">
//       <div className="container mx-auto py-12">
//         <h2 className="text-3xl font-bold text-center mb-6">Welcome to Foodie</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {foods.map((food, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
//             >
//               <img
//                 src={food.image}
//                 alt={food.name}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-semibold mt-2">{food.name}</h3>
//               <p className="text-gray-600 text-sm text-center">{food.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import CityFood from './CityFood';

const Home = () => {
  // Food data for Mumbai and Delhi
  const mumbaiFoods = [
    { name: "Vada Pav", image: "/img/vada-pav.jpg", description: "Famous street food from Mumbai." },
    { name: "Pav Bhaji", image: "/img/pav-bhaji.jpg", description: "Spicy vegetable curry served with pav." },
    { name: "Bhel Puri", image: "/img/bhel-puri.jpg", description: "A tangy and crispy snack." },
  ];

  const delhiFoods = [
    { name: "Chole Bhature", image: "/img/Chole Bhature.jpg", description: "A rich combination of chickpeas and fried bread." },
    { name: "Paratha", image: "/img/paratha.jpg", description: "Famous flatbread served with curd and pickles." },
    { name: "Aloo Tikki", image: "/img/aloo-tikki.jpg", description: "A delicious potato snack with spices." },
  ];

  return (
    <div id="home">
      {/* Mumbai Foods */}
      <CityFood cityName="Mumbai" foods={mumbaiFoods} />

      
    </div>
  );
};

export default Home;

