// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import About from '../pages/about/about';
import BacklogPage from '../pages/backlog/backlog';
import ActivePage from '../pages/active/active';

export function App() {
  const basename = window.location.pathname.startsWith('/react') ? '/react' : '/';

  return (
    <BrowserRouter basename={basename}>
      <div style={{ border: '2px dashed blue', padding: '10px', margin: '10px' }}>
        <h2>React Remote App</h2>
        <p>Current Basename: {basename}</p> 
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/backlog" element={<BacklogPage />} />
          <Route path="/active" element={<ActivePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
