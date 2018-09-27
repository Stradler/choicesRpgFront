import React from "react";
import {Button} from "react-bootstrap";
const Game = (props) => {
  return(
          <div className="App">
          {props.events ? (
            <p className="App-intro">Nice</p>
          ) : (
            <p className="App-intro">Not nice</p>
          )}
          <p>{props.events || "no data available"}</p>
          {props.fetching ? (
            <Button disabled>Fetching...</Button>
          ) : (
            <Button onClick={props.onRequestEvents}>Request a Events</Button>
          )}

          {props.error && (
            <p style={{ color: "red" }}>Uh oh - something went wrong!</p>
          )}
        </div>
  );
}

export default Game;