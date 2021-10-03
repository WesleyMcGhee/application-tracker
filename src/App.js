import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Tracking from "./pages/tracking/Tracking";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/tracking" component={Tracking} />
      </Switch>
    </div>
  );
}

export default App;
