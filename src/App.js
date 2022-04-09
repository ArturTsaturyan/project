import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'

import Home from './HomePage/HomePage'
import About from './About/AboutPage'
import Contact from './Contact/ContactPage'
import Celsus from './Celsus/CelsusPageManu'


export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AboutPage" component={About} />
        <Route exact path="/ContactPage" component={Contact}/>
        <Route exact path="/CelsusPage" component={Celsus}/>
      </Switch>
    </Router>

  )
}