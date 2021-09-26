import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
