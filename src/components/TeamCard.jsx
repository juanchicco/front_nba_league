import React from "react";
import { useContext } from "react";
import { Box,Card, CardContent, CardHeader, CardMedia, Typography, CardActions, Button} from "@mui/material";
import TeamContext from '../teamContext'


const TeamCard = () => {
    const {setSelectedTeam,data} = useContext(TeamContext) 
    return(
        <Box sx = {{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2em'}}>
        {data.map((team) => 
        <Card key={team.id} sx={{ maxWidth:345, margin: '2em', borderRadius: '8px'}}>
            <CardHeader sx={{textAlign: 'center', color: "#012030"}} title={`${team.city} ${team.name}`}/>
            <CardMedia image={team.file} component="img" sx={{width: 345, height: 350, objectFit: "cover"}}>
            </CardMedia>
            <CardActions sx={{display:'flex',justifyContent:'center',alignItems: 'center',margin: '12px 0'}}>
                <Button  size="large"
                color="secondary" variant="contained" sx={{textAlign: 'center'}} href="http://localhost:3000/playersOfTeam"
                onClick={()=> setSelectedTeam(data)}
                >Roster</Button>
            </CardActions>

        </Card>
            
            )}
        </Box>
    )
}

export default TeamCard 