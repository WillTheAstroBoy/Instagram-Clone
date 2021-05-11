import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";
 import { SignIn, SignUp, Home, UserProfile, NotFound } from "./pages/";
 import { UserContext } from "./context/user";
 import useAuthListener from "./hooks/use-auth-listener";
 import ProtectedRoute from "./helpers/protectedRoute";


export default function App() {
  const {user} = useAuthListener();
  return (
    <UserContext.Provider value={{ user }} >
      <Router>
        <Switch>
          <Route path="/p/:username" >
            <UserProfile />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <ProtectedRoute user={user} path="/" exact >
            <Home />
          </ProtectedRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

