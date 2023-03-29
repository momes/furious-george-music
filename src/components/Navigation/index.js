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

const pages = ['Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar({activeTab}) {
  const [anchorElNav, setAnchorElNav] = useState(null)

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
                key={'contact'}
                href={'https://www.instagram.com/furiousgeorgemusic/'}
                target="_blank"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <InstagramIcon />
              </Button>
           
          </Box>
          <Button href={'/'}>
          <img src={`${process.env.PUBLIC_URL}/FG-LOGO-WHITE.png`} style={{display:{ xs: 'none', md: 'flex' }, height: '20vh'}}/>
</Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', flexDirection:'row-reverse' } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
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