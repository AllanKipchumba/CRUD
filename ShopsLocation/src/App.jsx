import AddShops from './components/addShops';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CodeForInterview /> } /> */}
        {/* <Route path="all" element={<allShops /> } /> */}
        <Route path="/add" element={<AddShops />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;