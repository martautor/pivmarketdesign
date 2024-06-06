import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, IconButton, Toolbar, Typography, createTheme } from "@mui/material";
import logo from '../img/logo.png'
const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#66492F',
      },
    },
  });

export default function Header() {
    return (<ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" sx={{width: '100vw'}}>
          <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <IconButton>
                <img src={logo} alt="logo" style={{width: 75}}/>
            </IconButton>
            <Box sx={{m: 2}}>
            <Typography variant="span" sx={{fontSize: '30px'}} >
                ПИВМАРКЕТ №1
            </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>)
}