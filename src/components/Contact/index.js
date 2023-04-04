import Navigation from '../Navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="Home" style={{overflowX:"hidden"}}>
      <Navigation activeTab={'contact'}/>
      {isMobile ? (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}> 
        <Typography style={{position: 'absolute', color: 'yellow', left: '10vw', top: '20vh'}}>
          FOR BOOKING AND OTHER INQUIRIES 
          <br/>
          <span style={{fontSize: '1em'}}><a style={{color: 'yellow'}} href='mailto: management@furiousgeorgemusic.com' >management@furiousgeorgemusic.com</a></span> 
          </Typography>
        <Box gridColumn={isMobile? "span 12" :"span 6"}>
           <img alt='grg' src={`${process.env.PUBLIC_URL}/george-contact.png`} style={{width:'100%'}}/>
        </Box>
       
      </Box>
      ) :
      (
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} style={{flexDirection: 'row-reverse'}}>
        <Box gridColumn={isMobile? "span 12" :"span 6"}>
           <img alt='grg-contact' src={`${process.env.PUBLIC_URL}/george-contact.png`} style={{width:'100%'}}/>
        </Box>
        <Box gridColumn={isMobile ? "span 12": "span 6"}>
        <Typography style={{color: 'white', marginTop: '25vh'}}>
          FOR BOOKING AND OTHER INQUIRIES 
          <br/>
          <span style={{fontSize: '1.5em'}}><a style={{color: 'white'}} href='mailto: management@furiousgeorgemusic.com' >management@furiousgeorgemusic.com</a></span> 
          </Typography>
        </Box>
      </Box>
      )}
    </div>
  );
}

export default Contact;
