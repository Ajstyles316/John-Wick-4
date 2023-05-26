import { useEffect, useState } from 'react';
import './App.css';
import { BookingButton } from './componentes/BookingButton';
import {MovieMain} from './componentes/MovieMain';
import { TopCastContainer } from './componentes/TopCastContainer';
function App() {
  const [movie, setMovies] = useState("");
  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt0439572&apikey=b575670a")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="App">
        <MovieMain movie={movie}/>
        <TopCastContainer movie={movie}/>
        <BookingButton/>
    </div>
  );
}

export default App
