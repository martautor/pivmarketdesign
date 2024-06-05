import { Box, Button, Container, Typography } from "@mui/material";
import '@fontsource/roboto/400.css'
import logo from '../img/logo.png'
import {isMobile} from 'react-device-detect';
import '../css/content.css'

const buttonS = { backgroundColor: 'white', color: 'black', mb: 2, width: isMobile ? '175px' : '300px', justifyContent: 'start', textAlign: 'right', alignContent: 'center', alignItems: 'center', p: 2}
const boxS = { display: 'flex', flexDirection: 'column', alignItems: 'center' }

const textGenerate = (text) => {
    return (<Typography sx={{ textAlign: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }} variant="p">{text}</Typography>)
}

const logoGenerate = (src) => {
    isMobile ? <img width="50" height="50" src={src} alt="logo"/> : <img width="50" height="50" src={src} alt="logo"/>
}
export default function Content() {
    return(<Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center'}}>
        <Box mt={21} mb={3} component='div' sx={boxS}>
            <Typography mb={1} variant="h6">
                Скачать мобильное приложение:
            </Typography>
            <Button sx={buttonS} variant='text' target="_blank" href="https://play.google.com/store/apps/details?id=ru.mobint.pivmarket1&pcampaignid=web_share" disableFocusRipple> 
                <img style={{paddingRight: '50px'}} width="50" height="50" src="https://img.icons8.com/color/48/google-play.png" alt="google-play"/>
                {textGenerate('Google Play')}
            </Button>
            <Button p={2} mb={2} sx={buttonS} variant='text' target="_blank" href="https://apps.apple.com/ru/app/%D0%BF%D0%B8%D0%B2%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-1/id6473837140" disableFocusRipple> 
                <img style={{paddingRight: '50px'}} width="50" height="50" src="https://img.icons8.com/color/48/apple-app-store--v3.png" alt="apple-app-store--v3"/>
                {textGenerate('App Store')}
            </Button>
            
        </Box>
        <Box mb={2} component='div' sx={boxS}>
            <Typography variant="h6" mb={1}>
                Добавить карту в Telegram:
            </Typography>
            <Button sx={buttonS} variant='text' target="_blank" href="https://t.me/pivmarket1bot" disableFocusRipple> 
                <img style={{paddingRight: '50px'}} width="50" height="50" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/>
                {/* {logoGenerate(("https://img.icons8.com/color/48/telegram-app--v1.png"))} */}
                {textGenerate('Telegram')}
            </Button>
        </Box>
        <Box component='div' sx={boxS}>
            <Typography mb={1} variant="h6">
                Хотите перенести данные (в том числе и бонусы) с физической карты?
            </Typography>
            <Button  sx={buttonS} variant='text' target="_blank" href="https://bonus.pm26.ru" disableFocusRipple>
            <img style={{paddingRight: '20px'}} width="45" height="45" src={logo} alt="logo"/>
            {logoGenerate(logo)}
            {textGenerate('Пивмаркет x BonusMoney')}
            </Button>
        </Box>
        
    </Container>)
}