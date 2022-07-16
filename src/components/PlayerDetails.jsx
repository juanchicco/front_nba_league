import {Typography,Card,CardMedia,CardContent,CardActions,CardHeader,Button} from '@mui/material'
import { useContext } from 'react';
import playerContext from '../playerContext';

function PlayerDetails() {
    const {selectedPlayer,setSelectedPlayer} = useContext(playerContext)
    return(

        selectedPlayer && (
        <Card sx={{minWidth: '300px', height: '320', marginLeft:'20px'}}>
            <CardHeader title={`${selectedPlayer.firstName} ${selectedPlayer.lastName}`}/>
            <CardMedia component="img" image={selectedPlayer.file}/>
            <CardContent sx={{display:'grid', gridTemplateColumns: 'repeat(2,1fr)'}}>

                <Typography variant="body2">{`Age: ${selectedPlayer.age}`}</Typography>
                <Typography variant="body2">{`Height: ${selectedPlayer.heigth} cm`}</Typography>
                <Typography variant="body2">{`Weight: ${selectedPlayer.weigth} kg`}</Typography>
                <Typography variant="body2">{`Country: ${selectedPlayer.country}`}</Typography>
                
            </CardContent>
            <CardActions>
                <Button 
                variant="contained"
                color="error"
                onClick={() => setSelectedPlayer(null)}
                >Cerrar</Button>
            </CardActions>

        </Card>
    ))
}
export default PlayerDetails