import {Button,TableRow,TableCell} from '@mui/material';
import playerContext from '../playerContext';
import { useContext } from 'react';

function PlayerRow({player}) {
    const {setSelectedPlayer} = useContext(playerContext)
    return(

        <TableRow>
            <TableCell align="center" sx={{color:"white"}}>{player.firstName}</TableCell>
            <TableCell align="center" sx={{color:"white"}}>{player.lastName}</TableCell>
            <TableCell align="center" sx={{color:"white"}}>{player.id_team}</TableCell>
            <TableCell align="center" sx={{color:"white"}}>
                <Button 
                color="success" 
                variant="contained"
                onClick={() => setSelectedPlayer(player)}
                >Details</Button>
            </TableCell>
        </TableRow>
    )
}
export default PlayerRow