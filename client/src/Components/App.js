import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import NavBar from "./NavBar"
import Home from "./Home";


function App() {

  const [user, setUser] = useState(null);
  let history = useHistory();
  
  useEffect(() => {
  fetch("/me").then((res) => {
   if (res.ok) {
    res.json().then((user) => setUser(user));
    }
   });
  }, []);


  function onLogin(loguser){
    setUser(loguser)
    history.push("/home")
  }

  if (!user){
    return <div>
      <Switch>
      <Route exact path="/">
      <LoginForm onLogin={onLogin} user={user}/>
      </Route>  
      <Route exact path="/sign">
      <SignUpForm onLogin={onLogin}/>
      </Route>
      </Switch>
    </div>
  }

  return (
    <div>
      <NavBar user={user}/>
      <Switch>    
      <Route exact path="/home" component={()=><Home setUser={setUser} user={user}/>}/> 
      </Switch>
    </div>
  );
}

export default App;



