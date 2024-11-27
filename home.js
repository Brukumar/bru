import React from 'react';
import CarCard from '../components/CarCard';

const cars = [
  { id: 1, name: 'Toyota Corolla', price: 50, image: '/images/corolla.jpg' },
  { id: 2, name: 'Honda Civic', price: 60, image: '/images/civic.jpg' },
  { id: 3, name: 'Tesla Model 3', price: 100, image: '/images/tesla.jpg' },
];

function Home() {
  return (
    <div className="home">
      <h1>Available Cars</h1>
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
