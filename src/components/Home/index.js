import Navigation from '../Navigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (<>
    {isMobile ? 
    (<div className="Home" style={{overflow:"hidden", width:'100vw', height:'100vh'}}>
    <Navigation active={'home'}/>
  <div>
    <img src={`${process.env.PUBLIC_URL}/FG-LOGO-WHITE.png`} style={{width:'100vw', marginTop: '5vh'}}/>
  <img src={`${process.env.PUBLIC_URL}/george-main.png`} style={{position:'absolute', left: '0', top: '35vh',width:'100vw', zIndex: 10}}/>
  </div>
  </div>):
  ( <div className="Home" style={{overflowX:"hidden"}}>
  <Navigation active={'home'}/>
<div>
<img src={`${process.env.PUBLIC_URL}/george-main.png`} style={{position:'absolute', left: '20vw', width:'60vw', zIndex: 10}}/>
  <img src={`${process.env.PUBLIC_URL}/george-bg.png`} style={{position:'absolute', left: 0, top: '25vh', width:'100vw', zIndex: 5}}/>
</div>
</div>)}
</>
  );
}

export default Home;
