import React from "react";
import { Switch, Route } from "react-router-dom";

// Pages
import Categories from "./pages/categories/categories.component";
import Checkout from "./pages/checkout/checkout.component";
import Home from "./pages/home/home.component";
import LoginPage from "./pages/login-page/login-page.component";
import MyAccount from "./pages/my-account/my-account.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SingleCategorie from "./pages/single-categorie/single-categorie.component";

// Components
import Navbar from "./components/navbar/navbar.component";
import Sidebar from "./components/sidebar/sidebar.component";

const Routes = () => (
  <div>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/account" component={MyAccount} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/categories/:id" component={SingleCategorie} />
    </Switch>
  </div>
);

export default Routes;
