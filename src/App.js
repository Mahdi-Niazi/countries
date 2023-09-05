import { BrowseRouter, Routes, Route } from 'react-router-dom';
import Details from './routes/Details';
import Homepage from './routes/Homepage';

function App() {
  return (
    <BrowseRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:code" element={<Details />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>
    </BrowseRouter>
  );
}

export default App;
