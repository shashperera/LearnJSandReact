import React from 'react';
import { Container } from '@mui/material';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#f9f9f9',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0',
  },
  question: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  answer: {
    fontSize: '16px',
    marginBottom: '10px',
  },

  grid: {
    backgroundColor: '#0458',
    display: 'grid',
    padding: '20px',
    gridGap:'10px',
    gridColumnGap: '20px',
    gridRowGap: '20px', // Adjusted grid row gap
    gridTemplateColumns: 'repeat(3, 1fr)', // Adjusted grid columns
    gridTemplateRows: 'repeat(3, 1fr)', // Adjusted grid columns

  },

  gridItem:{
    backgroundColor: 'white',
    fontSize: '20px',
    padding: '20px',
    textAlign: 'center',
  }
};

const items = [1,2,3,4,5,5,6,7,8,9];

const OpenGrid = () => {
  return (
    <Container style={styles.container}>
      <head>

      </head>
      <div id="grid" style={styles.grid}>
        {items.map((item) => (
          <div key={item} style={styles.gridItem}>
          {item}
          </div>
        ))}
        <title>Hello this is a grid</title>

      </div>
    </Container>
  );
};

export default OpenGrid;
