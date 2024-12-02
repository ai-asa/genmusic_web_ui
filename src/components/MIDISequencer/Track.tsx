import React from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import { MIDITrack } from '../../contexts/MIDIContext';

interface TrackProps {
  track: MIDITrack;
}

const Track: React.FC<TrackProps> = ({ track }) => {
  return (
    <Box sx={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
      <Box sx={{ width: 150, p: 1 }}>
        <Typography>{track.name}</Typography>
        <Select value={track.instrument} onChange={() => {}}>
          <MenuItem value="piano">Piano</MenuItem>
          <MenuItem value="guitar">Guitar</MenuItem>
          <MenuItem value="bass">Bass</MenuItem>
          <MenuItem value="drums">Drums</MenuItem>
        </Select>
      </Box>
      <Box sx={{ flexGrow: 1, height: 120 }}>
        {/* Implement piano roll and MIDI editing area here */}
      </Box>
    </Box>
  );
};

export default Track;