import logo from './logo.svg';
//import './App.css';
import Home from './Component/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.min.js" ;
import Services from './Component/services/Services';
import Pricing from './Component/pricing/pricing';
import Team from './Component/team/team';
import Blog from './Component/blog/blog';
import Contact from './contact/contact';

function App() {
  return (
    <div className="App">
     <Home/>
     <Services/>
     <Pricing/>
     <Team/>
     <Blog/>
     <Contact/>
    </div>
  );
}

export default App;
