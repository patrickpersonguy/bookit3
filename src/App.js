import { Box, Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import AppView from './layouts/AppView';
import AppSideBar from './layouts/AppSideBar';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <AppSideBar />
          <AppView />
        </Stack>
      </Box>
      <Routes>
        <Route path="/a" component={AboutPage} />
      </Routes>
    </Router>
  );
}

export default App;