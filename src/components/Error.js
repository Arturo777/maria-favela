import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Esta página no existe</p>
      <Link to='/'>
        Regresar al home
      </Link>
    </div>
  );
};

export default Error;
