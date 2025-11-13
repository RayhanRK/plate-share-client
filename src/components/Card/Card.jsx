import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ food = {} }) => {
  // Destructure fields safely, using defaults if missing
  
  const {
    donator_email ,
    donator_image,
    donator_name,
    expire_date,
    food_image,
    food_name,
    food_quantity,
    food_status,
    _id,
  } = food;

  // Optional: skip rendering if the food object is empty
  if (!food_name) return null;

  return (
    <div className="card bg-base-100 max-w-110 shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition duration-200">
      <div className="w-full h-56 overflow-hidden rounded-t-md">
        <img
          src={food_image}
          alt={food_name}
          className="object-cover w-full"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{food_name}</h2>
        <div className="flex items-center gap-5">
          <p className="badge badge-md badge-success">{food_status}</p>
          <p className="font-semibold">Expire Date: {expire_date}</p>
        </div>
        <p className="font-semibold text-center mt-2">
          Serves {food_quantity} {food_quantity < 1 ? 'People' : "People's"}{' '}
        </p>
        <div className="shadow border rounded-md border-neutral-300 p-3 flex justify-between items-center">
          <div>
            <p className="font-semibold">{donator_name}</p>
            <p>{donator_email}</p>
          </div>
          <div className="max-w-10 rounded overflow-hidden">
            <img src={donator_image} alt={donator_name} className="object-cover" />
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/foods/${_id}`}
            className="btn btn-primary text-white w-full mt-3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
