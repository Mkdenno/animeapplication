import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Movies from "./components/Movies";


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies />}/>
      {/* <Route path="/about" element={<About/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
