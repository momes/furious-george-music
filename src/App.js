import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/index.js'
import Contact from './components/Contact/index.js'
import Shows from './components/Shows/index.js'


function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
    <BrowserRouter>
    <Routes>
      <Route path='/contact' element={<Contact />} />
      <Route path='/shows' element={<Shows />}/>
      <Route path='/george-has-a-show' element={<Shows />}/>
      <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
