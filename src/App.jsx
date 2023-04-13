import './App.css'
import { BookingButton } from './componentes/BookingButton'
import MovieMain from './componentes/MovieMain'
import { TopCastContainer } from './componentes/TopCastContainer'
function App() {

  return (
    <div className="App">
        <MovieMain/>
        <TopCastContainer/>
        <BookingButton/>
    </div>
  )
}

export default App
