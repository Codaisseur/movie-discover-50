import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import DiscoverPage from "./pages/DiscoverPage";
import NavBar from "./components/NavBar";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/discover' component={DiscoverPage} exact />
        <Route path='/discover/:movie_id' component={MovieDetailsPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
