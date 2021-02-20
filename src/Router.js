import React from "react";
import {
  BrowserRouter as Router, Switch,  Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Product from './Product'
import Productitem from './Productitem';
import NotFound from './NotFound';

function Router1(){

return(

<>
<Router>
    <Navbar />
    <Switch>
    <Route exact path ='/' component={Home} />
    <Route  path ='/about' component={About} />
    <Route exact path ='/product' component={Product}/>
    <Route  path ='/product/:id' component={Productitem}/>
    <Route  path ='*' component={NotFound}/>







    </Switch>







</Router>





</>






)






}
export default Router1;