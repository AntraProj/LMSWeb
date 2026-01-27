// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import About from '../pages/about/about';

export function App() {
  return (
    <BrowserRouter basename="/react">
      <div style={{ border: '2px dashed blue', padding: '10px', margin: '10px' }}>
        <h2>React Remote App</h2>
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
