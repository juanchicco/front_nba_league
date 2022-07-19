import { Button } from "@mui/material";
import TeamContext from "../teamContext";
import { useContext } from "react";

function ButtonRoster ({team}) {
    const {setSelectedTeam} = useContext(TeamContext)
    return(
    <>
        <Button 
            size="large" key={team.id} href="#"
            color="secondary" variant="contained" sx={{textAlign: 'center'}} 
            onClick={() => setSelectedTeam(team)}
        >Roster</Button>
    </>
    )
}
export default ButtonRoster