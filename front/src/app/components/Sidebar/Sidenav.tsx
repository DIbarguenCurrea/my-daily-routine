
import es from "../../utils/locales/es";
import en from "../../utils/locales/en";
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { Box, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

function Sidenav() {

  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = locale === "es" ? es : en;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t.sidenav.title}
          </Typography>
          <LanguageSwitcher />
          <Button color="inherit">{t.sidenav.login}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Sidenav