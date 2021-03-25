import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import DiscoverPage from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/discover' component={DiscoverPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
