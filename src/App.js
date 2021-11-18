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
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Header  */}
        <Header></Header>
        <Switch>
          {/* Home  */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Redirect to="/"></Redirect>
          </Route>
          {/* Shop  */}
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          {/* Checkout  */}
          <Route exact path="/checkout">
            <CheckOut></CheckOut>
          </Route>
          {/* Checkout  */}
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          {/* Checkout  */}
          <Route exact path="/about-us">
            <CheckOut></CheckOut>
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
    </AuthProvider>
  );
}

export default App;
