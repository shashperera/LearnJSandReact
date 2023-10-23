import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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
};

const OpenWindowButton = () => {
  return (
    <Container style={styles.container}>
      <div>
        <Typography variant="h2" style={styles.heading}>
          React Q and Answers
        </Typography>
        <List style={styles.list}>
          <ListItem>
            <Typography variant="h5" style={styles.question}>
              Question 1:
            </Typography>
            { /*<Typography variant="body1">
              Explain the difference between state and props in React and answer.
            </Typography> */}
            <List style={styles.list}>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Props: (short for properties) are used to pass data from a parent component to a child component." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Props are read-only and cannot be modified by the child component." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="They allow you to create reusable and configurable components by passing data into them." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="State: is used to manage and store component-specific data that can change over time." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="State is mutable, meaning that you can modify it within the component." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="When state is updated, React automatically re-renders the component to reflect the changes." />
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default OpenWindowButton;
