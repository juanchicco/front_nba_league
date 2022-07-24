import {useState,useEffect} from "react"
import './App.css'
import TeamContext from './teamContext'
import TeamCard from "./components/TeamCard"
import NavBar from "./components/NavBar"
//import { Typography } from "@mui/material"
import PlayersOfTeam from "./routes/PlayersOfTeam"

function App() {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [selectedTeam,setSelectedTeam] = useState(null)
    

    function handleErorr(res) {
        if(!res.ok) throw Error(res.status)
        return res.json()
    }

    useEffect(() =>{
        fetch('https://nba-league-api.herokuapp.com/teams')
        .then(res => handleErorr(res))
        .then(data => setData(data))
        .catch(error => setError(true))
    },[error])


    if(error) return(
      <>
      <h3>Error while fetching...</h3>

      </>
    )

    return(
    <TeamContext.Provider value={{data,setData,selectedTeam,setSelectedTeam}}>
      <NavBar/>
      <main style={{backgroundColor: '#EBFFDE'}}>
        
        <section>
          <TeamCard/>
        </section>
        <PlayersOfTeam/>
      </main>
    </TeamContext.Provider>
    )
}

export default App
