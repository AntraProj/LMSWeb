import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import Dashboard from '../pages/dashboard/dashboard';
import About from '../pages/about/about';
import ActiveBoard from '../pages/activeBoard/activeBoard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0b0d10',
      paper: '#14161a',
    },
    primary: {
      main: '#2563eb',
    },
  },
});

function App() {
  const basename = window.location.pathname.startsWith('/react')
    ? '/react'
    : '/';

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/active" element={<ActiveBoard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;