import React from 'react';
import { Link } from 'react-router';
import ErrorImg from '../assets/error-404.png';
const Error404 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      
      <div className="w-full max-w-xl space-y-5">
        <img src={ErrorImg} alt="error img" />
        <div className="container mx-auto text-center">
          <h1 className='text-4xl'>Error The page is Not Found</h1>
          <Link to="/" className="btn btn-primary text-white mt-4 ">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;