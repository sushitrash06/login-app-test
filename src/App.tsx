import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './login'
import Table from './Table'

function App() {
  return (
    <Router>
     <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/data' Component={Table}/>
     </Routes>
    </Router>
  )
}

export default App
