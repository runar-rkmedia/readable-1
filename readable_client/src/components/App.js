import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import { connect } from "react-redux";
import Categories from "./Categories";
import { fetchCategories } from "../actions";

// This project will be using material components in order
// to create little prettier design

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Route exact path="/" component={Categories} />
          {/* <Route exact path="/:category" component={CategoryList} />
          <Route exact path="/:category/:post" component={CategoryList} />
          <Route
            exact
            path="/:category/:post/:comment"
            component={CategoryList}
          />
          <Route exact path="/newpost" component={PostForm} /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps, { fetchCategories })(App);
