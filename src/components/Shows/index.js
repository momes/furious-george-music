import Navigation from '../Navigation';
import {getShows} from '../../api/showService'
import {React, useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';

function Shows() {
  const [shows, setShows] = useState([])
  const [error, setError] = useState(null)

  return (
    <div className="Shows" style={{overflowX:"hidden"}}>
      <Navigation activeTab={'shows'}/>
      <Typography style={{color: 'white', marginTop: '25vh'}}>
         NO UPCOMING SHOWS.
      </Typography>
    </div>
  );
}

export default Shows;
