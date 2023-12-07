import { Box, Stack } from '@mui/material';
import React from 'react';
import AppView from './layouts/AppView';
import AppSideBar from './layouts/AppSideBar';

function App() {
  return (
    <Box>
      <Stack direction="row">
        <AppSideBar style={{ position: "fixed", top: 0, bottom: 0 }} flexGrow={0.2} />
        <AppView sx={{ flexGrow: 0.8 }} justifyContent={"flex-end"} />
      </Stack>
    </Box>
  );
}

export default App;