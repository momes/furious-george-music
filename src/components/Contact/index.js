import Navigation from '../Navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Contact() {
  return (
    <div className="Home" style={{overflowX:"hidden"}}>
      <Navigation activeTab={'contact'}/>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 6">
           <img src={`${process.env.PUBLIC_URL}/george-contact.png`} style={{width:'100%'}}/>
        </Box>
        <Box gridColumn="span 6">
        <Typography style={{color: 'white', marginTop: '25vh'}}>
          FOR BOOKING AND OTHER INQUIRIES 
          <br/>
          <span style={{fontSize: '1.5em'}}><a style={{color: 'white'}} href='mailto: management@furiousgeorgemusic.com' >management@furiousgeorgemusic.com</a></span> 
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
