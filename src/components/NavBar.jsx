import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';


export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#051c2d'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SportsBasketballIcon fontSize="large" sx={{color:"orange"}}/>
          </IconButton>
          <Typography variant="h6" sx={{marginLeft: 0}}>NBA</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block', marginRight: 2 }} href="http://localhost:3000/players">
                Players
              </Button>
              <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }} href="http://localhost:3000/">Teams</Button>
              <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block', marginLeft: 2 }}>Support</Button>
          </Box>

          <Button variant="contained" sx={{backgroundColor: "#0B2559",marginRight: 4}} href="http://localhost:3000/users/register">Sign Up</Button>
          <Button variant="contained" href="http://localhost:3000/users/login">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
