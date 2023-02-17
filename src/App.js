import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useRef } from 'react'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Trending from './components/Trending/Trending';
import NotFound from './components/NotFound';

function App() {
  const bgRef = useRef();

  return (
    <div className="App">
      <Navbar />

      {/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/trending" element={<Trending />} />

        <Route path='*' element={<NotFound />}/>

      </Routes>
    </div>
  );
}

export default App;
