import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import NavBar from "./components/NavBar";
import Home from "./components/Home";

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
          <SignupForm onLogin={onLogin}/>
        </Route>
      </Switch>
    </div>
  }

  return (
    <div className="App">
      Hello From React, Brooks
      <NavBar user={user} />
      <Switch>
        <Route
          exact
          path="/home"
          component={() => <Home setUser={setUser} user={user} />}
        />
      </Switch>
    </div>
  );
}

export default App;
