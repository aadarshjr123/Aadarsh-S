import React from 'react'
import './styles/Home.css';
import Navbar from './components/NavBar'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


export default function App() {
  return (
    <div className="container">
    <div className="imageContainer">
    <div className="image">
    <a className="logo">&lt;a/&gt;</a>
    </div>
    </div>  
    <div>
     <BrowserRouter>
       <Navbar />
       <Switch>
         <Route exact path="/">
           <Redirect to="/about"/>
         </Route>
         <Route path='/about' exact component={About} />
         <Route path='/Projects' component={Projects} />
         <Route path='/Contacts' component={Contact} />
       </Switch>
     </BrowserRouter>
    </div>
    </div>
  )
}
