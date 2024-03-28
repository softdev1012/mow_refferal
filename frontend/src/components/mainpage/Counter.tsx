import React from 'react';
import { Grid, Typography } from '@mui/material';

interface CounterProps {
  items: string[];
  values: string[];
}

const Counter: React.FC<CounterProps> = ({ items, values }) => {
  return (
    <Grid container spacing={4} justifyContent="space-around" alignItems="center" my={8}>
      {items.map((item, index) => (
        <Grid item key={index}>
          <div>
            <Typography variant="h6" gutterBottom>
              {item}
            </Typography>
            <Typography variant="h3" component="div" fontWeight="bold">
              {values[index]}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default Counter;
