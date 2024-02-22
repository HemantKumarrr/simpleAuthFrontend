import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import Private from './components/Private/Private'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Private />} >
            <Route path='/profile' element={ <Profile /> } />
          </Route>
          <Route path='/signup' element={ <Signup /> } />
          <Route path='/' element={ <Signup /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
