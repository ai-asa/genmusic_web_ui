import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { useMIDI } from '../../contexts/MIDIContext';

const PlaybackControls: React.FC = () => {
  const { currentTime } = useMIDI();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 1, borderTop: '1px solid #ccc' }}>
      <IconButton>
        <PlayArrowIcon />
      </IconButton>
      <IconButton>
        <StopIcon />
      </IconButton>
      <Typography sx={{ ml: 2 }}>BPM: 120</Typography>
      <Typography sx={{ ml: 2 }}>Time: {currentTime.toFixed(2)}</Typography>
    </Box>
  );
};

export default PlaybackControls;