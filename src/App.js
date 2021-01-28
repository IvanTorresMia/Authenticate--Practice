import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './History'
import UseProvider from './context/UserProvider';
import Home from './Pages/Home';
import Profile from './Pages/Profile'
import MenuBar from './Components/menus/MenuBar'

const App = () => {

  return ( 
   <Router>
     <UseProvider history={history}>
       {/* These componennts are going to relly on authentication */}
      <Route path="/" component={MenuBar}/>
      <Route path="/Profile" component={Profile}/>
     </UseProvider>
     <Route path="/" exact component={Home}/>
   </Router>
  )
}

export default App;
