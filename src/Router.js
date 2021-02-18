import React from "react";
import {
  BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Product from './Product'
function Router1(){

return(

<>
<Router>
    <Navbar />
    <Switch>
    <Route exact path ='/' component={Home} />
    <Route exact path ='/about' component={About} />
    <Route exact path ='/product' component={Product}/>






    </Switch>







</Router>





</>






)






}
export default Router1;