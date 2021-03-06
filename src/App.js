import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Header from "./components/Pages/Layout/Header/Header";
import Footer from "./components/Pages/Layout/Footer/Footer";
import Login from "./components/Pages/Auth/Login/Login";
import Register from "./components/Pages/Auth/Register/Register";
import Shop from "./components/Pages/Shop/Shop/Shop";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import TestLoader from "./TestLoader";
import PrivateRoute from "./components/Pages/PrivateRoute/PrivateRoute";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/* Home  */}
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Redirect to="/"></Redirect>
          </Route>
          {/* Shop  */}
          <Route exact path="/shop">
            <Header></Header>
            <Shop></Shop>
            <Footer></Footer>
          </Route>
          {/* Checkout  */}
          <PrivateRoute exact path="/checkout/:productId">
            <Header></Header>
            <CheckOut></CheckOut>
            <Footer></Footer>
          </PrivateRoute>
          {/* Checkout  */}
          <Route exact path="/contact-us">
            <Header></Header>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>
          {/* Login  */}
          <Route exact path="/login">
            <Login></Login>
          </Route>
          {/* Register  */}
          <Route exact path="/register">
            <Register></Register>
          </Route>
          {/* admin panel route  */}
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/loader">
            <TestLoader></TestLoader>
          </Route>
          <Route exact path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
