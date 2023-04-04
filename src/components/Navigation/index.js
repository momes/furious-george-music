import {React, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const pages = ['CONTACT', 'MUSIC', 'SHOWS'];

function ResponsiveAppBar({activeTab}) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , flexDirection:'row-reverse'} }}>
        
              <Button
              type='link'
                key={'contact'}
                href={'/contact'}
                sx={{ my: 2, color: (activeTab === 'contact' ? 'yellow': 'white'), display: 'block' }}
              >
                CONTACT
              </Button>
              <Button
              type='link'
                key={'instagram'}
                href={'https://www.instagram.com/furiousgeorgemusic/'}
                target="_blank"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <InstagramIcon />
              </Button>
           
          </Box>
          <Button href={'/'} style={{display: (isMobile?  'none':'flex' )}}>
          <img src={`${process.env.PUBLIC_URL}/FG-LOGO-WHITE.png`} style={{display: (isMobile?  'none':'flex' ), height: '20vh'}}/>
</Button>
         
          <Button href={'/'} style={{display: isMobile ? 'flex': 'none', color: 'white'}}>
Furious George Music</Button>
<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', flexDirection:  'row-reverse' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} style={{flexDirection: 'row-reverse'}}>
                  {page === 'CONTACT' && (
                    <Button type='link' key={page} href='/contact' style={{display:'flex', color: 'black', flexDirection:'row-reverse'}}>{page}</Button>
                  )}
                 {page === 'MUSIC' && (
                    <Button type='link' key={page}  href='https://on.soundcloud.com/j9dRc7KGpoBcT8Qq8
                    '
                    target="_blank"  style={{display:'flex', color: 'black', flexDirection:'row-reverse'}}>{page}</Button>
                  )}
                  {page === 'SHOWS' && (
                    <Button type='link' href='/shows' key={page} style={{display:'flex', alignItems:'right', color: 'black', flexDirection:'row-reverse'}}>{page}</Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
              type='link'
                key={'music'}
                href='https://on.soundcloud.com/j9dRc7KGpoBcT8Qq8
                '
                target="_blank"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                MUSIC
              </Button>
              <Button
              type='link'
                key={'shows'}
                href={'/shows'}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: activeTab === 'shows' ? 'yellow': 'white', display: 'block' }}
              >
                SHOWS
              </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;