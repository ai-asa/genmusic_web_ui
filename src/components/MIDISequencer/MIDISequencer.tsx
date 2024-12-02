import React from 'react';
import { Box, Button } from '@mui/material';
import { useMIDI } from '../../contexts/MIDIContext';
import SequenceRuler from './SequenceRuler';
import Track from './Track';
import SequenceBar from './SequenceBar';
import PlaybackControls from './PlaybackControls';

const MIDISequencer: React.FC = () => {
  const { tracks, addTrack } = useMIDI();

  return (
    <Box sx={{ width: '100%', height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
      <SequenceRuler />
      <Box sx={{ flexGrow: 1, overflow: 'auto', position: 'relative' }}>
        {tracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
        <SequenceBar />
      </Box>
      <Button onClick={addTrack} sx={{ my: 1 }}>トラックの追加 +</Button>
      <PlaybackControls />
    </Box>
  );
};

export default MIDISequencer;