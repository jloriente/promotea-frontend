import React from 'react';
import axios from 'axios';

const RedirectItem = ({ redirect }) => {
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${redirect.nfcId}`)
      .then(() => alert('Redirect deleted'))
      .catch(error => console.error('Error deleting:', error));
  };

  return (
    <div>
      <p>ID: {redirect.nfcId} - URL: {redirect.url} <button onClick={handleDelete}>Delete</button></p>
    </div>
  );
};

export default RedirectItem;
