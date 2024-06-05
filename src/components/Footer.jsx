import { ThemeProvider } from "@emotion/react";
import { AppBar, Link, Toolbar, Typography, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#66492F',
      },
    },
  });

export default function Footer() {
    return (<ThemeProvider theme={darkTheme}>
        <AppBar color="primary" sx={{
            width: '100vw',
            position: 'relative',
            top: '90px',
            bottom: '0px'
        }}>
          <Toolbar sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
          <Typography variant="h7" component='div' sx={{mt: 2, mb: 1}}>
                Помощь и поддержка клиентов: <Link href='#' underline="always" sx={{color: grey[400]}}>bonus@pm26.ru</Link>
            </Typography> 
            <Typography variant="h7" component='div' sx={{mt: 2, mb: 1, color: grey[200]}}>
                Copyright © <Link href='#' underline="always" sx={{color: grey[400]}}>www.pm26.ru</Link> 2024
            </Typography>
            
                
          </Toolbar>
        </AppBar>
      </ThemeProvider>)
}