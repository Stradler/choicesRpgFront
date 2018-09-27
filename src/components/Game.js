import React from "react";
import {Button} from "react-bootstrap";
import GameWindow from "./GameWindow";
import "./Game.css";
const Game = (props) => {
  return(
          <div className="Game">
            <div><GameWindow mainEvents={props.events}/></div>
          {props.fetching ? (
            <Button disabled>Fetching...</Button>
          ) : (
            <Button style={{width: "300px", margin: "0 auto"}} onClick={props.onRequestEvents}>Request Events</Button>
          )}

          {props.error && (
            <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
          )}
        </div>
  );
}

export default Game;