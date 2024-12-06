const FoodCard = ({ name, image, description, link }) => {
  return (
    <a
      href={link}
      className="block bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1"
      aria-label={`Learn more about ${name}`}
    >
      {/* Food Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
        loading="lazy" // Improves performance for images
      />
      {/* Food Name */}
      <h3 className="text-lg font-semibold mt-2 text-red-500">{name}</h3>
      {/* Food Description */}
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
    </a>
  );
};

export default FoodCard;
