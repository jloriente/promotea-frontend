import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RedirectItem from './RedirectItem';

const RedirectList = () => {
  const [redirects, setRedirects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setRedirects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Redirections</h2>
      {redirects.map(redirect => (
        <RedirectItem key={redirect._id} redirect={redirect} />
      ))}
    </div>
  );
};

export default RedirectList;
