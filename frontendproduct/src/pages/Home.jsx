import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://branition.com/assets/img/users/logos/6218-8cIbWdE.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'Black',
        padding: 3,
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgb(5, 205, 255)' }}>
        Welcome to ReadyBear
        </Typography>
        <Typography variant="h6" sx={{ textShadow: '1px 1px 3px rgb(0, 255, 255)' }}>
        ReadyBear: Liquor within your reach, safely
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/products"
          sx={{ marginTop: 3, fontSize: '1.2rem' }}
        >
          START NOW
        </Button>
      </Container>
    </Box>
  );
};

export default Home;

