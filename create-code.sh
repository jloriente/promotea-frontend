#!/bin/bash

# Set up directories for the React project
echo "Creating project folders..."

# Main project directory
mkdir -p src/components

# React app directory structure
touch src/App.js
touch src/index.js
touch src/components/RedirectList.js
touch src/components/RedirectItem.js
touch src/components/RedirectForm.js
touch .env

# Inform the user the project structure has been created
echo "Project structure created successfully."

# Add content to the files

echo "Creating initial content for App.js..."

cat <<EOL > src/App.js
import React from 'react';
import RedirectList from './components/RedirectList';
import RedirectForm from './components/RedirectForm';

function App() {
  return (
    <div>
      <h1>Manage NFC Redirections</h1>
      <RedirectForm />
      <RedirectList />
    </div>
  );
}

export default App;
EOL

echo "Creating initial content for RedirectList.js..."

cat <<EOL > src/components/RedirectList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RedirectItem from './RedirectItem';

const RedirectList = () => {
  const [redirects, setRedirects] = useState([]);

  useEffect(() => {
    axios.get(\`\${process.env.REACT_APP_API_URL}/\`)
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
EOL

echo "Creating initial content for RedirectItem.js..."

cat <<EOL > src/components/RedirectItem.js
import React from 'react';
import axios from 'axios';

const RedirectItem = ({ redirect }) => {
  const handleDelete = () => {
    axios.delete(\`\${process.env.REACT_APP_API_URL}/\${redirect.nfcId}\`)
      .then(() => alert('Redirect deleted'))
      .catch(error => console.error('Error deleting:', error));
  };

  return (
    <div>
      <p>{redirect.nfcId} - {redirect.url}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RedirectItem;
EOL

echo "Creating initial content for RedirectForm.js..."

cat <<EOL > src/components/RedirectForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RedirectForm = ({ existingRedirect }) => {
  const [nfcId, setNfcId] = useState(existingRedirect ? existingRedirect.nfcId : '');
  const [url, setUrl] = useState(existingRedirect ? existingRedirect.url : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    const redirect = { nfcId, url };

    if (existingRedirect) {
      axios.put(\`\${process.env.REACT_APP_API_URL}/\${nfcId}\`, redirect)
        .then(() => alert('Redirect updated'))
        .catch(error => console.error('Error updating:', error));
    } else {
      axios.post(\`\${process.env.REACT_APP_API_URL}/\`, redirect)
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
EOL

# Add basic content for .env
echo "REACT_APP_API_URL=http://localhost:5000/api/redirects" > .env

echo "Bash script executed successfully! Your project structure has been created."