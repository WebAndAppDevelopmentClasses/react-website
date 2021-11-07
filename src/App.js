import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Error404 from './components/Error404';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Blog from './components/Blog';
// import demo_post from './components/posts/demo_post';

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
        {/* <Route path='/blog' exact component={Blog}/> */}
        {/* <Route path='/blog/demo-post' component={demo_post}/> */}
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
