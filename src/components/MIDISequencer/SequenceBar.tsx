import React from 'react';
import { Box } from '@mui/material';
import { useMIDI } from '../../contexts/MIDIContext';

const SequenceBar: React.FC = () => {
  const { currentTime } = useMIDI();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: 'red',
        left: `${currentTime * 100}px`, // Adjust this calculation based on your time scale
      }}
    />
  );
};

export default SequenceBar;