import React, { useState } from "react";

const ReviewForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && review && rating) {
      onSubmit({ name, review, rating });
      setName("");
      setReview("");
      setRating(0);
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="mt-8 bg-white p-6 rounded shadow-lg relative">
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose} // Triggering the onClose callback when clicked
          className="absolute top-2 right-2 text-black hover:text-gray-800"
          aria-label="Close"
        >
          X
        </button>
      )}

      <h3 className="text-xl font-bold mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value={0}>Select Rating</option>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 && "s"}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
