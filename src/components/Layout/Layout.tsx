import React from 'react';
import { Box, Container, Tabs, Tab } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import FileTab from '../FileTab';
import SettingsTab from '../SettingsTab';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Tabs value={value} onChange={handleChange}>
        <Tab label="ファイル" />
        <Tab label="設定" />
      </Tabs>
      {value === 0 && <FileTab />}
      {value === 1 && <SettingsTab />}
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;