import AddShops from './components/addShops';
import AllShops from './components/allShops';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditShops from './components/editShop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CodeForInterview /> } /> */}
        <Route path="/all" element={<AllShops /> } />
        <Route path="/add" element={<AddShops />} />
        <Route path="/edit/:id" element={<EditShops/>} />

        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        {/* <Route path='/*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;