import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./GameWindow.css";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";

class GameWindow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      click: 0,
      winCondition: 6
    }
    this.alertMessage = this.alertMessage.bind(this);
  }
  alertMessage(message){
      if(this.state.click >= this.state.winCondition){
        alert("You won!");
      } else {
        this.setState({
          winCondition: this.state.winCondition,
          click: this.state.click + 1
        });
        alert(message)
      }
  }
  render() {
    const mainEvents = this.props.mainEvents || [];
    console.log(mainEvents)
    if (mainEvents.length < 1){
      return (<div>No Game yet!</div>);
    }
    return (
      <Grid className="GameWindow">
        <Row>
          <Col xs={4} lg={4}>
            <p>Goals: Click answers at least {this.state.winCondition} times!</p>
            <p>{this.state.click} clicks!</p>
          </Col>
          <Col xs={4} lg={4}>
            <img alt="devil" src={devil} />
          </Col>
          <Col xs={4} lg={4}>
            Alignment (how good or bad you char is, under development)
          </Col>
        </Row>
        {mainEvents.map((event, index) => (
          <Row key={index}>
            <Row>
              <Col xs={4} lg={4} />
              <Col xs={4} lg={4}>
                {event.name}
              </Col>
              <Col xs={4} lg={4} />
            </Row>
            <Grid>
              <Row>
                <Col xs={4} lg={4}>
                  <Button
                    bsStyle="success"
                    onClick={ () => this.alertMessage(event.answers[0].mainMessage.message)}
                  >
                    {event.answers[0].answer_name}
                  </Button>
                </Col>
                <Col xs={4} lg={4}>
                  <img alt="hero" src={hero} />
                </Col>
                <Col xs={4} lg={4}>
                  <Button
                    bsStyle="warning"
                    onClick={ () => this.alertMessage(event.answers[1].mainMessage.message)}
                  >
                    {event.answers[1].answer_name}
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Row>
        ))}
        <Row>
          <Col xs={4} lg={4}>
            Placeholder
          </Col>
          <Col xs={4} lg={4}>
            HP: 999, HM: 999
          </Col>
          <Col xs={4} lg={4}>
            Inventory:
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default GameWindow;
