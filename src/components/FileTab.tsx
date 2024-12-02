import React from 'react';
import { Box, Button } from '@mui/material';

const FileTab: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained">MIDIファイルを開く</Button>
      <Button variant="contained" sx={{ ml: 2 }}>MIDIファイルを保存</Button>
    </Box>
  );
};

export default FileTab;