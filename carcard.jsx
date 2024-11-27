import React from 'react';

function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>Price: ${car.price}/day</p>
      <button>View Details</button>
    </div>
  );
}

export default CarCard;
