import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">We'd love to hear from you!</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              rows="4"
              aria-label="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
