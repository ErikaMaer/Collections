import React from 'react';
import{BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./contexT/AuthContext";
import {Navbar} from "./componentS/Navbar";
import 'materialize-css';
import {Loader} from "./componentS/Loader";


function App() {
  const{token, login, logout,userId, ready, cardId,card}= useAuth()
  const isAuthenticated =!!token
  const routes =useRoutes(isAuthenticated)

    if(!ready){
        return <Loader />
    }
  return (
  <AuthContext.Provider value={{
    token, login, logout,userId,isAuthenticated,cardId,card
  }}>
    <Router>
      { isAuthenticated && <Navbar/> }
      <div className="container">
        {routes}
      </div>
    </Router>
  </AuthContext.Provider>
    )
    }

export default App;
