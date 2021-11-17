import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Header from "./components/Pages/Layout/Header/Header";
import Footer from "./components/Pages/Layout/Footer/Footer";
import Login from "./components/Pages/Auth/Login/Login";
import Register from "./components/Pages/Auth/Register/Register";
function App() {
  return (
    <div>
      <Router>
        {/* Header  */}
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* Login  */}
          <Route exact path="/login">
            <Login></Login>
          </Route>
          {/* Register  */}
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
        {/* Footer */}
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
