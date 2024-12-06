// import React from "react";

const Map = ({ latitude, longitude }) => {
    if (!latitude || !longitude) {
      return <p className="text-center text-gray-500">Location not available</p>;
    }
  
    const mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_API_KEY&center=${latitude},${longitude}&zoom=15`;
  
    return (
      <div className="w-full h-64 mt-4">
        <iframe
          src={mapUrl}
          title="Map View"
          className="w-full h-full rounded"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default Map;
  