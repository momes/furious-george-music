import Navigation from '../Navigation';
import {React} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Shows() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const shows = []
  return (
    <div className="Shows" style={{overflowX:"hidden"}}>
      <Navigation activeTab={'shows'}/>
      {isMobile && (<Typography style={{color: 'yellow', fontWeight: 'bold', marginTop: '5vh'}}>
        UPCOMING SHOWS
      </Typography>)}
      {shows.length === 0 && (<Typography style={{color: 'white', marginTop: '25vh'}}>
         NO UPCOMING SHOWS.
      </Typography>)}
      <>
      {shows.map((show, i) => 
        (<Box style={{width:isMobile ? "90vw" : "50vw", margin: '5vh auto'}}>
          <Typography style={{color: 'white', fontWeight: 'bold'}}>
        {show.date}            
        </Typography>
        <Typography style={{color: 'white'}}>
        {show.name}            
        </Typography>
        <Typography style={{color: 'white'}}>
        {show.location}            
        </Typography>
        {show.ticketLink ? (<Button href={`${show.ticketLink}`}  target="_blank"  style={{margin:'2vh',color: 'white',padding:'2% 4%',border: '1px white solid', borderRadius: '0px'}}>
          Tickets
          </Button>) : (
            <Button disabled style={{margin:'2vh',color: 'white',padding:'2% 4%',border: '1px white solid', borderRadius: '0px'}}>
            FREE
            </Button>
          )}
        
          {shows.length > 1 && i !== shows.length -1 ? (<hr style={{width:'50%'}}/>) : null}
          </Box>
          
        )
      )}
      </>
    </div>
  );
}

export default Shows;
