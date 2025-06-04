// NotFoundPage.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, color: '#1976d2' }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you’re looking for doesn’t exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
