import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DropdownCartContainer } from "./dropdown-cart.styles";

const DropdownCart = () => <DropdownCartContainer></DropdownCartContainer>;

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(DropdownCart);
