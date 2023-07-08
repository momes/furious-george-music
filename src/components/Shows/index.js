import Navigation from '../Navigation';
import {React} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SHOWS} from '../../constants';

function Shows() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="Shows" style={{overflowX:"hidden"}}>
      <Navigation activeTab={'shows'}/>
      {SHOWS.filter((s)=> s.metaDate > new Date()).length === 0 && (<Typography style={{color: 'white', marginTop: '25vh'}}>
         NO UPCOMING SHOWS.
      </Typography>)}
      <>
      {SHOWS.filter((s)=> s.metaDate > new Date()).map((show, i) => 
         (<Box style={{width:isMobile ? "90vw" : "50vw", margin: '5vh auto'}}>
         <Typography style={{color: 'white', fontWeight: 'bold'}}>
       {show.date}            
       </Typography>
       <Typography style={{color: 'white'}}>
       {show.name.toUpperCase()}            
       </Typography>
       <Typography style={{color: 'white', fontStyle: 'italic'}}>
       {show.location.toUpperCase()}            
       </Typography>
       {show.ticketLink ? (<Button href={`${show.ticketLink}`}  target="_blank"  style={{margin:'2vh',color: 'white',padding:'2% 4%',border: '1px white solid', borderRadius: '0px'}}>
         Tickets
         </Button>) : (
           <Button disabled style={{margin:'2vh',color: 'white',padding:'2% 4%',border: '1px white solid', borderRadius: '0px'}}>
           FREE
           </Button>
         )}
       
         {SHOWS.length > 1 && i !== SHOWS.length -1 ? (<hr style={{width:'50%'}}/>) : null}
         </Box>
         
       )
      )}
      </>
    </div>
  );
}

export default Shows;
