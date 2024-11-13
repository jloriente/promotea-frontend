import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RedirectItem = ({ redirect }) => {
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${redirect.nfcId}`)
      .then(() => alert('Redirect deleted'))
      .catch(error => console.error('Error deleting:', error));
  };

  return (
    <div>
      <p>
        ID: {redirect.nfcId} - URLs: {redirect.url}  NAME: {redirect.name} - DESCRIPTION: {redirect.descrpition} 
        <button onClick={handleDelete}>Delete</button></p>
        <button onClick={handleRedirect}>Go to Redirect</button>
    </div>
  );
};

export default RedirectItem;
