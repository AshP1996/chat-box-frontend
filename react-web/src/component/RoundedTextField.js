import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const RoundedTextField = styled((props) => (
  <TextField variant="outlined" size="small" margin="normal" fullWidth {...props} />
))({
  '& .MuiOutlinedInput-root': {
    borderRadius: 10,
  },
});

export default RoundedTextField;
