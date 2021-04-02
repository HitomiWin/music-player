
import { BrowserRouter as Router, Route} from 'react-router-dom'
import MusicsContextProvider from './contexts/MusicsContext';
import Navbar from './components/Navbar';
import MusicPlayer from './pages/MusicPlayer'
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar /> 
      <MusicsContextProvider>
      <Route exact path="/musicspelare-react-hooks" component={MusicPlayer}/>
      </MusicsContextProvider>
      </Router>
    </div>
  );
}

export default App;
