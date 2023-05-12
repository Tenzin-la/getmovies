import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Home';
import MovieList from './components/Movielist';
import Movie from './pages/Movie';
import Pricing from './pages/Pricing';


function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='movie/:id' element={<Movie/>} />
        <Route path='movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={<h2>Error 404</h2>} />

      </Routes>

      

    </div>
  );
}

export default App;
