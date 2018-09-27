import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Game from "../components/Game";

class App extends Component {
  render() {
    const { fetching, events, onRequestEvents, error } = this.props;

    return (
      <Router>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Играть</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} componentClass="span">
                <Link to="/about">Об игре</Link>
              </NavItem>
              <NavItem eventKey={2} componentClass="span">
                <Link to="/contacts">Контакты</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <div className="main">
            <Route
              exact
              path="/"
              render={props => (
                <Game
                  {...props}
                  events={events}
                  error={error}
                  onRequestEvents={onRequestEvents}
                  fetching={fetching}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </div>

          <Navbar className="navbar__custom" inverse>
            <Nav>
              <NavItem eventKey={3} componentClass="span">
                <Link to="/">Играть</Link>
              </NavItem>
              <NavItem eventKey={1} componentClass="span">
                <Link to="/about">Об игре</Link>
              </NavItem>
              <NavItem eventKey={2} componentClass="span">
                <Link to="/contacts">Контакты</Link>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    events: state.mainEvents,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestEvents: () => dispatch({ type: "API_CALL_REQUEST_MAIN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
