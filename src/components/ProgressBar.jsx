<<<<<<< HEAD
import React, { useState } from 'react';
import {
  CircularProgressbar, buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Paper, Button, Dialog, DialogTitle, DialogContent,
  TextField, DialogActions, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

const ProgressBar = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState('kg');  // Default unit

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Paper style={{
      padding: '20px',
      backgroundColor: '#CEDDC2',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '300px',
      height: '300px',
      borderRadius: '16px',
    }}>
      <h3>Today's Leaves Info</h3>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: '#467E18',
          textColor: '#467E18',
          trailColor: '#FFFFFF',
          rotation: 0.5,
          textSize: '20px'
        })}
      />
      <Button 
      variant="contained" 
      color="#467E18" 
      style={{ 
        marginTop: '5%', 
        backgroundColor: '#467E18', 
        color: 'white', 
        borderRadius: '10px',
        width: '200px',
        textAlign: 'center'
        }} 
        onClick={handleClickOpen}>
        Add Leaves
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Leaves Data Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="weight"
            label="Weight"
            type="number"
            fullWidth
            variant="outlined"
          />
          <FormControl variant="outlined" fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              id="unit-select"
              value={unit}
              onChange={handleUnitChange}
              label="Unit"
            >
              <MenuItem value="kg">Kilograms</MenuItem>
              <MenuItem value="mg">Milligrams</MenuItem>
              <MenuItem value="g">Grams</MenuItem>
              <MenuItem value="lbs">Pounds</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <Button onClick={handleClose} color="primary" style={{ color: '#4caf50', borderColor: '#4caf50' }}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" style={{ backgroundColor: '#467E18', color: 'white' }}>
            Add Leaves
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ProgressBar;
=======
import React, { useState } from 'react';
import {
  CircularProgressbar, buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Paper, Button, Dialog, DialogTitle, DialogContent,
  TextField, DialogActions, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';

const ProgressBar = ({ value }) => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState('kg');  // Default unit

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  return (
    <Paper style={{
      padding: '20px',
      backgroundColor: '#CEDDC2',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '3%',
      width: '300px',
      height: '300px'
    }}>
      <h3 style={{ fontFamily: 'DM Sans, sans-serif', marginBottom: '15px'}}>Today's leaves information</h3>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: '#467E18',
          textColor: '#467E18',
          trailColor: '#FFFFFF'
        })}
      />
      <Button variant="contained" color="#467E18" style={{ marginTop: '5%', backgroundColor: '#467E18', color: 'white' }} onClick={handleClickOpen}>
        Add Leaves
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Leaves Data Form</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="weight"
            label="Weight"
            type="number"
            fullWidth
            variant="outlined"
          />
          <FormControl variant="outlined" fullWidth style={{ marginTop: '20px' }}>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              id="unit-select"
              value={unit}
              onChange={handleUnitChange}
              label="Unit"
            >
              <MenuItem value="kg">Kilograms</MenuItem>
              <MenuItem value="mg">Milligrams</MenuItem>
              <MenuItem value="g">Grams</MenuItem>
              <MenuItem value="lbs">Pounds</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <Button onClick={handleClose} color="primary" style={{ color: '#4caf50', borderColor: '#4caf50' }}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained" style={{ backgroundColor: '#4caf50', color: 'white' }}>
            Add Leaves
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ProgressBar;
>>>>>>> 79c07a1cf20eda6717d1df8bbb43cc02579ec15c
