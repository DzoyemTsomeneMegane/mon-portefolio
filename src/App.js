import Home from './components/home'; 
import { Route, Routes } from 'react-router-dom';
// import Private from './components/private'

function App() {
  return (
    <div>
      <Routes>
        < Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;

// {/* <Route path="/" exact component={Home} />
// <Route path="/about" component={About} />
// <Route path="/projects" component={Projects} />
// <Route path="/contact" component={Contact} />
// <Route component={NotFound} />  */}
