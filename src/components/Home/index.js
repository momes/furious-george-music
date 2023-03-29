import Navigation from '../Navigation';

function Home() {
  return (
    <div className="Home" style={{overflowX:"hidden"}}>
      <Navigation active={'home'}/>
    <div>
    <img src={`${process.env.PUBLIC_URL}/george-main.png`} style={{position:'absolute', left: '20vw', width:'60vw', zIndex: 10}}/>
      <img src={`${process.env.PUBLIC_URL}/george-bg.png`} style={{position:'absolute', left: 0, top: '25vh', width:'100vw', zIndex: 5}}/>
    </div>
    </div>
  );
}

export default Home;
