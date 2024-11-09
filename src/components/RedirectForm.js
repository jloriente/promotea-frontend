import React, { useState } from 'react';
import axios from 'axios';

const RedirectForm = ({ existingRedirect }) => {
  const [nfcId, setNfcId] = useState(existingRedirect ? existingRedirect.nfcId : '');
  const [url, setUrl] = useState(existingRedirect ? existingRedirect.url : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const redirect = { nfcId, url };

    if (existingRedirect) {
      axios.put(`${process.env.REACT_APP_API_URL}/${nfcId}`, redirect)
        .then(() => alert('Redirect updated'))
        .catch(error => console.error('Error updating:', error));
    } else {
      axios.post(`${process.env.REACT_APP_API_URL}/`, redirect)
        .then(() => alert('Redirect created'))
        .catch(error => console.error('Error creating:', error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="NFC ID"
        value={nfcId}
        onChange={(e) => setNfcId(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RedirectForm;
