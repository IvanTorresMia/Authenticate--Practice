import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import UseProvider from './context/UserProvider';
import Home from './Pages/Home';
import Profile from './Pages/Profile'
import MenuBar from './Components/menus/MenuBar'

const App = () => {

  return ( 
   <Router history={History}>
     <UseProvider>
      <Route path="/" component={Home}/>
      <Route path="/" component={Profile}/>
     </UseProvider>
   </Router>
  )
}

export default App;
