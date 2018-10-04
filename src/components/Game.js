import React from "react";
import GameWindow from "./GameWindow";
import { connect } from "react-redux";
import "./Game.css";
import * as constants from "../constants";
import * as actions from "../actions";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsIds: [],
      currentEvent: -1
    };
  }
  render() {
    const {
      mainEvents,
      survivalEvents,
      getSurvivalEvents,
      HP,
      AGE,
      MONEY,
      error,
      changeAGE,
      changeHP,
      changeMONEY
    } = this.props;
    if (HP <= 0 || MONEY < 0) {
      return (
        <div>
          Вы проиграть. Чито поделать. (здесь должна быть кнопка на начать
          заново)
        </div>
      );
    }
    if (HP > 100 || MONEY > 10000) {
      return (
        <div>
          Вы проиграть. Слишком много вещей у вас. Чито поделать. (здесь должна
          быть кнопка на начать заново)
        </div>
      );
    }
    const event = mainEvents[Math.floor(AGE)];
    if (!event) {
      <div>
        Вы выиграть. Грац. Вы прожили: {Math.floor(AGE)} лет! (здесь должна быть
        кнопка на начать заново)
      </div>;
    }
    const currentMonth = (AGE - Math.floor(AGE)) * 10;

    if (currentMonth >= 5) {
      changeAGE(Math.floor(AGE) + 1.0);
      getSurvivalEvents(Math.floor(AGE));

      return (
        <div className="Game">
          <div>
            <GameWindow event={event} MONEY={MONEY} HP={HP} />
          </div>

          {error && (
            <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
          )}
        </div>
      );
    }

    this.setState({
      ...this.state,
      current: this.state.current + 1
    });
    event = survivalEvents[this.state.eventsIds[this.state.current]];

    //renderitj gamewindow с текущим survival ивентом из currentEvent

    return (
      <div className="Game">
        <div>
          <GameWindow event={event} MONEY={MONEY} HP={HP} />
        </div>

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
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
      dispatch({ type: constants.API_CALL_REQUEST_SURVIVAL, payload: { age } }),

    changeAGE: age => dispatch(actions.changeAGE(age)),
    changeHP: hp => dispatch(actions.changeHP(hp)),
    changeMONEY: money => dispatch(actions.changeMONEY(money))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
