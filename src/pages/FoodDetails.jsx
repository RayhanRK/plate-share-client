import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`https://plate-share2.vercel.app/api/foods/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFood(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleOpenModal = () => {
    toast.success("Request Modal Open!");
  };

  return (
    <section className="py-15 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-10 p-5">

        {/* Left */}
        <div className="w-full lg:w-1/2 overflow-hidden shadow-md rounded-md p-5">
          <img
            src={food?.food_image}
            alt={food?.food_name}
            className="w-full h-56 lg:h-80 object-cover rounded-md"
          />

          <div className="shadow-md rounded-md p-5 mt-10 flex flex-col md:flex-row items-center gap-5">
            <img
              src={food?.donor_image}
              alt={food?.donor_name}
              className="max-w-20 rounded-md min-h-20 object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{food?.donor_name}</h2>
              <p>{food?.donor_email}</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-5xl font-semibold">{food?.food_name}</h2>

          <p className="badge badge-success my-3">{food?.food_status}</p>

          <div className="shadow-lg p-5">
            <p className="font-semibold mt-2 text-xl">
              Serves {food?.food_quantity} People
            </p>
            <p className="text-xl font-semibold">{food?.expired_date}</p>
          </div>

          <div className="shadow-lg p-5">
            <p>
              <span className="font-semibold">Pickup Location: </span>
              {food?.pickup_location}
            </p>
          </div>

          <div className="shadow-lg p-5">
            <p>Additional Note: {food?.additinal_note}</p>
          </div>

          <button
            onClick={handleOpenModal}
            className="btn btn-primary text-white w-full text-lg mt-8"
          >
            Request Food
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
