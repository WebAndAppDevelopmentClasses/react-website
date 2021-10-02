import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="main-body">
    <div className="glassmorphism">
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
