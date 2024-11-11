import React from 'react';
import { Box, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

const LoginPage = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <img src={`${process.env.PUBLIC_URL}/images/promotea-logo.png`} alt="Company Logo" 
            style={{ width: '300px', height: 'auto', margin: '30px'}}/>

        <Box width="100%">
          <TextField label="Username" fullWidth />
        </Box>
        <Box width="100%">
          <TextField label="Password" type="password" fullWidth />
        </Box>
        <Box width="100%">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Keep me logged in"
          />
        </Box>
        <Box width="100%">
          <Button fullWidth> Login </Button>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
