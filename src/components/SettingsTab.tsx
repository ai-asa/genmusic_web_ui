import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SettingsTab: React.FC = () => {
  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth>
        <InputLabel>SoundFont</InputLabel>
        <Select value="" onChange={() => {}}>
          <MenuItem value="default">Default SoundFont</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SettingsTab;