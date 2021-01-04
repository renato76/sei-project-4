import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import MovieDetails from './components/movies/MovieDetails'
import MovieNew from './components/movies/MovieNew'
import MovieEdit from './components/movies/MovieEdit'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile' 
import Footer from './components/common/Footer'


const App = ()  => {
  return (
    <BrowserRouter>
      <Notifications />
      <Navbar />
      <Switch>
        <Route path="/movies/:id/edit" component={MovieEdit} />
        <Route path="/movies/new" component={MovieNew} />   
        
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={Home} />   
        <Route path="/register" component={Register} />     
        <Route path="/login" component={Login} />    
        <Route path="/profile" component={Profile} />    
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App