import { Box, Button, Container, Typography } from "@mui/material";
import '@fontsource/roboto/400.css'
import logo from '../img/logo.png'
import {isMobile} from 'react-device-detect';
import '../css/content.css'

const buttonS = { display: 'flex', justifyContent: 'flex-start', textAlign: 'center', 
    backgroundColor: 'white', color: 'black', 
    mb: 2, p: 2, width: isMobile ? '80vw' : '400px', 
    borderRadius: '10px'}
const boxS = { display: 'flex', flexDirection: 'column', alignItems: 'center' }

const textGenerate = (text) => {
    return (<Box sx={{justifyContent: 'center', textAlign: 'center', width: '100vw'}}>
                <Typography sx={{ textAlign: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center'}} variant="h6">{text}</Typography>
            </Box>)
}

const logoGenerate = (src) => {
    isMobile ? <img width="50" height="50" src={src} alt="logo"/> : <img width="50" height="50" src={src} alt="logo"/>
}
export default function Content() {
    return(<Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', height: '75vh'}}>
        <Box mb={3} component='div' sx={boxS}>
            <Typography mb={1} variant="h6">
                Скачать мобильное приложение:
            </Typography>
            <Button variant="contained" color='inherit' sx={buttonS} target="_blank" href="https://play.google.com/store/apps/details?id=ru.mobint.pivmarket1&pcampaignid=web_share" disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/google-play.png" alt="google-play"/>
                {textGenerate('Google Play')}
            </Button>
            <Button variant="contained" color='inherit' sx={buttonS} target="_blank" href="https://apps.apple.com/ru/app/%D0%BF%D0%B8%D0%B2%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-1/id6473837140" disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/apple-app-store--v3.png" alt="apple-app-store--v3"/>
                {textGenerate('App Store')}
            </Button>
            
        </Box>
        <Box mb={2} component='div' sx={boxS}>
            <Typography variant="h6" mb={1}>
                Добавить карту в Telegram:
            </Typography>
            <Button variant="contained" color='inherit' sx={buttonS} target="_blank" href="https://t.me/pivmarket1bot" disableRipple disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/>
                {textGenerate('Telegram')}
            </Button>
        </Box>
        <Box component='div' sx={boxS}>
            <Typography mb={1} variant="h6">
                Добавить карту в приложение:
            </Typography>
            <Button variant="contained" color='inherit' sx={buttonS} target="_blank" href="https://bonus.pm26.ru" disableRipple disableFocusRipple disableElevation='true'>
                <img width="50" height="50" src={logo} alt="logo"/>
                {textGenerate('Добавить карту')}
            </Button>
        </Box>
        
    </Container>)
}