import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

// Pages
import Categories from "./pages/categories/categories.component";
import Checkout from "./pages/checkout/checkout.component";
import Home from "./pages/home/home.component";
import MyAccount from "./pages/my-account/my-account.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SingleCategorie from "./pages/single-categorie/single-categorie.component";
import Default from "./pages/default/default.component";

// Components
import Navbar from "./components/navbar/navbar.component";
import Sidebar from "./components/sidebar/sidebar.component";

// Redux
import { selectCurrentUser } from "../src/redux/user/user.selectors";

const Routes = ({ currentUser }) => (
  <>
    <Navbar />
    <Sidebar />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/account" component={MyAccount} />
      <Route
        exact
        path="/signin"
        render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
      />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/categories/:id" component={SingleCategorie} />
      <Route component={Default} />
    </Switch>
  </>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Routes);
