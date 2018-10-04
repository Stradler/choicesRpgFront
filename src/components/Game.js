import React from "react";
import GameWindow from "./GameWindow";
import { connect } from "react-redux";
import "./Game.css";
import * as constants from "../constants";
class Game extends React.Component {

  componentDidMount() {
    this.props.onRequestEvents();
    this.props.getSurvivalEvents(Math.floor(this.props.age));
  }
  render() {
    const props = this.props;
    return (
      <div className="Game">
        <div>
          <GameWindow mainEvents={props.events} />
        </div>

        {props.error && (
          <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    HP: state.HP,
    MONEY: state.MONEY,
    AGE: state.AGE,
    survivalEvents: state.survivalEvents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSurvivalEvents: age =>
      dispatch({ type: constants.API_CALL_REQUEST_SURVIVAL, payload: { age } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
