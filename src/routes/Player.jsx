import { useEffect,useState } from "react";
import playerContext from '../playerContext'
import PlayerTable from "../components/PlayerTable";
import PlayerFound from "../components/PlayerFound";
import NavBar from '../components/NavBar'
import PlayerDetails from "../components/PlayerDetails";

function Player(){
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [found,setFound] = useState("")
    const[selectedPlayer,setSelectedPlayer] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:3030/players')
        .then(res => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(true))
    },[error])

    if(error) return(
        <h2>Error while fetching</h2>
    )
    
    return(
    
        <playerContext.Provider value={{data,setData,found,setFound,selectedPlayer,setSelectedPlayer}}>
            <NavBar/>
            <h1 style={{textAlign: 'center',paddingTop: '1rem'}}>ALL PLAYERS OF NBA-LEAGUE</h1>
            <div style={{display: 'flex', flexDirection: 'column',width: '60vw', margin: 'auto',paddingTop: '1rem'}}>
                <PlayerFound/>
            </div>
            <div style={{margin: 30, display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
                <PlayerTable/>
                <PlayerDetails/>                
            </div>    
        </playerContext.Provider>

        )
}
export default Player