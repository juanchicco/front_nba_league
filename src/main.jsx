import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Routes,BrowserRouter,Route } from 'react-router-dom' 
import RegisterForm from './routes/RegisterForm'
import Player from './routes/Player'
import PlayersOfTeam from './routes/PlayersOfTeam'
import LoginForm from './routes/LoginForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/users/register' element={<RegisterForm/>}/>
        <Route path='/users/login' element={<LoginForm/>}/>
        <Route path='/players' element={<Player/>}/>
        <Route path='/playersOfTeam' element={<PlayersOfTeam/>}></Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
)
