import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Button, Switch, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RedirectList = () => {
  const [redirects, setRedirects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setRedirects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEdit = (redirect) => {
    navigate(`/redirects/${redirect.nfcId}`);
  };

  const handleDelete = (redirectId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/${redirectId}`)
      .then(() => {
        setRedirects(redirects.filter(redirect => redirect._id !== redirectId));
        alert('Redirect deleted');
      })
      .catch(error => console.error('Error deleting:', error));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Redirection URLs in the system
      </Typography>
      
      <Grid container spacing={2}>
        {redirects.map(redirect => (
          <Grid item xs={12} sm={6} md={4} key={redirect._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  NFC ID: {redirect.nfcId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  URL: {redirect.url}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  NAME: {redirect.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DESCRIPTION: {redirect.description}
                </Typography>

                {/* Additional Fields with Switches */}
                <Typography variant="body2" color="text.secondary">
                  Enabled:
                  <Switch checked={redirect.enabled} disabled />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Initialized by User:
                  <Switch checked={redirect.initializedByUser} disabled />
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(redirect)}
                  sx={{ mt: 2 }}
                >
                  Edit
                </Button>
                <span>    </span>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(redirect._id)}
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RedirectList;