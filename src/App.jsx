import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history'
import UseProvider from './context/UserProvider';
import Home from './Pages/Home';
import Profile from './Pages/Profile'
import MenuBar from './Components/menus/MenuBar'

// our app component which is being rendered
// I have never done jsx this way, it's always been a js file
// So that is pretty cool that you can actually

function App() {

  return ( 
   <Router>
     <UseProvider history={history}>
       {/* These componennts are going to relly on authentication */}
      <Route path="/" component={MenuBar}/>
      <Route path="/profile" component={Profile}/>
     </UseProvider>
     <Route path="/" exact component={Home}/>
   </Router>
  )
  }

export default App;
