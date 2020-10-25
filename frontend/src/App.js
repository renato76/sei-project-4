import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieDetails from './components/movies/MovieDetails'
import MovieNew from './components/movies/MovieNew'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


const App = ()  => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/movies/new" component={MovieNew} />   
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={Home} />   
        <Route path="/register" component={Register} />     
        <Route path="/login" component={Login} />   
          
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App