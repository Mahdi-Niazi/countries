import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './routes/Details';
import Homepage from './routes/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:code" element={<Details />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
