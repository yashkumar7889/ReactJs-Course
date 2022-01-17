import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>

      <Router>
        <MainNavigation />
        <Routes>
          <Route exact path='/' element={< AllMeetup />}></Route>
          <Route exact path='/newmeetup' element={< NewMeetup />}></Route>
          <Route exact path='/favourites' element={< Favourites />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
