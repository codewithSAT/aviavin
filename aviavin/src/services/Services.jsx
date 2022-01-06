import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Services = () => {
  const [showError, setshowError] = useState(false);
  useEffect(() => {
    axios
      .get('https://reqres.in/api/usSat')
      .then((response) => console.log(response))
      .catch((response) => {
        setshowError(true);
        console.log(response);
      });
  }, []);

  return (
    <div>
      API Calls
      {showError && <h2>Something went wrong</h2>}
    </div>
  );
};

export default Services;
