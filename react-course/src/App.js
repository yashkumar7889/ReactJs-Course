import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favourites from './pages/Favourites';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={< AllMeetup />}></Route>
          <Route exact path='/newmeetup' element={< NewMeetup />}></Route>
          <Route exact path='/favourites' element={< Favourites />}></Route>
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
