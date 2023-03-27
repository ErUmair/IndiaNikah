import './App.css';
import Header from './components/layout/Header';
import Guidelines from './components/main/Guidelines';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './style/app.scss'
import ProfileCreation from './components/main/profile_creation/ProfileCreation';
import Setps from './components/ant/Steps'


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/guidelines" element={<Guidelines/>} />
          <Route path="/profile_creation" element={<ProfileCreation/>} />
          <Route path="/" element={<Setps/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
