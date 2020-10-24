import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieDetails from './components/movies/MovieDetails'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'


const App = ()  => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={Home} />          
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App