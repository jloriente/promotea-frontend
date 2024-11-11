import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const RedirectList = () => {
  const [redirects, setRedirects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/`)
      .then(response => setRedirects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
                <Button
                  variant="contained"
                  color="primary"
                  href={`/redirects/${redirect.nfcId}`}
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