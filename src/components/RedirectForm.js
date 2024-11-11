import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

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
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        {existingRedirect ? 'Update Redirect' : 'Create a New Redirect'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="NFC ID"
          variant="outlined"
          fullWidth
          value={nfcId}
          onChange={(e) => setNfcId(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          {existingRedirect ? 'Update URL' : 'Add URL'}
        </Button>
      </form>
    </Container>
  );
};

export default RedirectForm;