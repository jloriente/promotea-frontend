import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Checkbox, FormControlLabel, Button, Container, Typography } from '@mui/material';
import { generateUniqueId } from '../utils';


const RedirectForm = ({ existingRedirect }) => {
  const [nfcId, setNfcId] = useState(existingRedirect ? existingRedirect.nfcId : generateUniqueId());
  const [url, setUrl] = useState(existingRedirect ? existingRedirect.url : '');
  const [name, setName] = useState(existingRedirect ? existingRedirect.name : '');
  const [description, setDescription] = useState(existingRedirect ? existingRedirect.description : '');
  const [enabled, setEnabled] = useState(existingRedirect ? existingRedirect.enabled : true);
  const [initializedByUser, setInitializedByUser] = useState(existingRedirect ? existingRedirect.initializedByUser : false);
  const [createdBy, setCreatedBy] = useState(existingRedirect ? existingRedirect.createdBy : '');
  const [updatedBy, setUpdatedBy] = useState(existingRedirect ? existingRedirect.updatedBy : '');
  const [tags, setTags] = useState(existingRedirect ? existingRedirect.tags.join(', ') : '');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const redirect = { nfcId, url, name, description, enabled, initializedByUser, createdBy, updatedBy, tags: tags.split(',').map(tag => tag.trim()) };

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
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
          }
          label="Enabled"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={initializedByUser}
              onChange={(e) => setInitializedByUser(e.target.checked)}
            />
          }
          label="Initialized By User"
        />
        <TextField
          label="Created By"
          variant="outlined"
          fullWidth
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Updated By"
          variant="outlined"
          fullWidth
          value={updatedBy}
          onChange={(e) => setUpdatedBy(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Tags"
          variant="outlined"
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {existingRedirect ? 'Save' : 'Create'}
        </Button>
      </form>
    </Container>
  );
};

export default RedirectForm;