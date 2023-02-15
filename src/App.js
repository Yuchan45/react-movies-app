import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />

      <hr />
      {/* En react se utilizan los 'Routes' para decir que cosa cargar segun el link */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />

        <Route path='*' element={<NotFound />}/>

      </Routes>
    </div>
  );
}

export default App;