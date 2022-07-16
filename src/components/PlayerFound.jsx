import React from "react";
import { useContext } from "react";
import playerContext from "../playerContext";
import { TextField } from "@mui/material";

function PlayerFound() {
    const {setFound} = useContext(playerContext)
    return(
        <TextField 
        label= "Search For LastName"
        variant="filled"
        type="search"
        onChange={(e)=> setFound(e.target.value)}
        />
    )
}
export default PlayerFound