import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout/Layout';
import { MIDIProvider } from './contexts/MIDIContext';
import MIDISequencer from './components/MIDISequencer/MIDISequencer';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MIDIProvider>
        <Layout>
          <MIDISequencer />
        </Layout>
      </MIDIProvider>
    </ThemeProvider>
  );
};

export default App;