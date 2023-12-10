import { Box, Stack } from '@mui/material';
import React from 'react';
import AppView from './layouts/AppView';
import AppSideBar from './layouts/AppSideBar';

function App() {
  return (
    <Box>
      <Stack direction="row" justifycontent="space-between">
        <AppSideBar/>
        <Box flexGrow={1} width={"20%"} height={"100vh"}/>
        <AppView />
      </Stack>
    </Box>
  );
}

export default App;