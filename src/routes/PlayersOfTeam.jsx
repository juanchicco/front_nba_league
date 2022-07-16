import TeamContext from '../teamContext'
import {useContext} from 'react'
function PlayersOfTeam() {
    const {selectedTeam} = useContext(TeamContext)
    return(
        selectedTeam && (
        <>
            {console.log(selectedTeam)}
            <h3>LLEGASTE AQUI</h3>
            <div>{selectedTeam}</div>
        </>
        )
    )
}
export default PlayersOfTeam