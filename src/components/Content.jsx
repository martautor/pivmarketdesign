import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import '@fontsource/roboto/400.css'
import logo from '../img/logo.png'
import { brown } from "@mui/material/colors";

export default function Content() {
    return(<Container sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center'}}>
        <Box mb={3} component='div' sx={{ display: 'flex', flexDirection: 'column', mt: 20, width: '36vw'}}>
            <Typography mb={1} variant="h6">
                Скачать мобильное приложение:
            </Typography>
            <Button sx={{ backgroundColor: 'white', color: 'black', mb: 2}} variant='contained' target="_blank" href="https://play.google.com/store/apps/details?id=ru.mobint.pivmarket1&pcampaignid=web_share" disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/google-play.png" alt="google-play"/>
                Google Play
            </Button>
            <Button mb={2} sx={{ backgroundColor: 'white', color: 'black'}} variant='contained' target="_blank" href="https://apps.apple.com/ru/app/%D0%BF%D0%B8%D0%B2%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-1/id6473837140" disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/apple-app-store--v3.png" alt="apple-app-store--v3"/>
                App Store
            </Button>
            
        </Box>
        <Box mb={3} component='div' sx={{ display: 'flex', flexDirection: 'column', width: '36vw'}}>
            <Typography variant="h6" mb={1}>
                Добавить карту в Telegram:
            </Typography>
            <Button sx={{ backgroundColor: 'white', color: 'black'}} variant='contained' target="_blank" href="https://t.me/pivmarket1bot" disableFocusRipple> 
                <img width="50" height="50" src="https://img.icons8.com/color/48/telegram-app--v1.png" alt="telegram-app--v1"/>
                Telegram
            </Button>
        </Box>
        <Box component='div' sx={{ display: 'flex', flexDirection: 'column', width: '36vw', mb: 5}}>
            <Typography mb={1} variant="h6">
                Хотите перенести данные (в том числе и бонусы) с физической карты?
            </Typography>
            <Button  sx={{ backgroundColor: 'white', color: 'black', mb:'2px'}} variant='text' target="_blank" href="https://bonus.pm26.ru" disableFocusRipple>
                <img width="50" height="50" src={logo} alt="logo"/>
                Пивмаркет x BonusMoney
            </Button>
        </Box>
        
    </Container>)
}