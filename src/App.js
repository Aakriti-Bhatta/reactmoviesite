import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/movie";
import ApiUsed from "./pages/apiUsed";
import MovieDb from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Switch>
          <Route exact path="/" component={MovieDb} />

          <Route exact path="/movie" component={Home} />
          <Route exact path="/apiused" component={ApiUsed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
