import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RedirectForm from '../components/RedirectForm';

function EditRedirectPage() {
  const { nfcId } = useParams();
  const [redirect, setRedirect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching redirect:', nfcId);
    axios.get(`${process.env.REACT_APP_API_URL}/${nfcId}`)
      .then(response => {
        setRedirect(response.data.data);
        console.log('data:')
        console.log(response.data.data)
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching redirect:', error);
        setLoading(false);
      });
  }, [nfcId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {redirect ? <RedirectForm existingRedirect={redirect} /> : <div>Redirect not found</div>}
    </div>
  );
}

export default EditRedirectPage;