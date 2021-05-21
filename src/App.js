import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddProduct from "./Components/AddProduct/AddProduct";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import AddOrder from "./Components/AddOrder/AddOrder";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import { createContext, useState } from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import Admin from "./Components/Admin/Admin";
import Order from "./Components/AddOrder/AddOrder";
import { Spinner } from "react-bootstrap";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
         
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/admin">
            <AddProduct/>
          </Route>
          <Route exact path="/order">
            <AddOrder />
          </Route>

          <Route exact path="/checkout">
            <CheckOut />
          </Route>
          <Route exact path="/checkout/:id">
            <CheckOut />
            {/* <AddOrder/> */}
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
