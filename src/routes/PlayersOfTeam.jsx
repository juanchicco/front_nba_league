import TeamContext from '../teamContext'
import {useContext} from 'react'
import {Typography} from '@mui/material'
const PlayersOfTeam = () => {
    const {selectedTeam} = useContext(TeamContext)
    return(
        <>
        <h1>Hello world</h1>
        {selectedTeam && (
            <div>
                {selectedTeam.players}
            </div>
        
        )}
        </>
    )
}
export default PlayersOfTeam