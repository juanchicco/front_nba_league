import React from "react";
import { useContext } from "react";
import playerContext from "../playerContext"
import {Paper,TableContainer,Table,TableHead,TableRow,TableBody,TableCell} from "@mui/material"
import PlayerRow from "./PlayerRow";

const PlayerTable = () => {
    const {data,found} = useContext(playerContext)
    return(
        <TableContainer component={Paper} className="paper">
            <Table sx={{minWidth: 650, backgroundColor: "#131FF2"}} aria-label="simple table">
                <TableHead sx={{backgroundColor: "#030A8C"}}>
                    <TableRow>
                        <TableCell align="center" sx={{color: "white", fontSize: 20}}>First Name</TableCell>
                        <TableCell align="center" sx={{color: "white", fontSize: 20}}>Last Name</TableCell>
                        <TableCell align="center" sx={{color: "white", fontSize: 20}}>Team</TableCell>
                        <TableCell align="center" sx={{color: "white", fontSize: 20}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.filter((player) => player.lastName.toLowerCase().startsWith(found.toLowerCase()))
                    .map((player) => (<PlayerRow key={player.id_player} player={player}/>)
                    )}              
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default PlayerTable