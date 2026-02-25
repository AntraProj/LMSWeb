import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import BacklogPage from '../pages/backlog/backlog';
import ActivePage from '../pages/active/active';
import Dashboard from '../pages/dashboard/dashboard';
import About from '../pages/about/about';
import CreateProjectPage from '../pages/createProject';
import ActiveProject from '../pages/activeProject/ActiveProject';
import ActiveBoard from '../pages/activeBoard/ActiveBoard';

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
          <Route path="/" element={<Navigate to="/dashboard" replace/>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createProject" element={<CreateProjectPage />} />
          <Route path="/backlog" element={<BacklogPage />} />
          {/* <Route path="/active" element={<ActivePage />} /> */}
          <Route path="/project/:projectId" element={<ActiveProject />}/>
          <Route path="/project/:projectId/activeboard" element={<ActiveBoard />}/>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
