import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./GameWindow.css";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";

class GameWindow extends React.Component {
  render() {
    const mainEvents = this.props.mainEvents || [];
    if (mainEvents.length < 1){
      return (<div>No Game yet!</div>);
    }
    return (
      <Grid className="GameWindow">
        <Row>
          <Col xs={4} lg={4}>

          </Col>
          <Col xs={4} lg={4}>
            <img alt="devil" src={devil} />
          </Col>
          <Col xs={4} lg={4}>

          </Col>
        </Row>
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
                    onClick={}
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
                    onClick={}
                  >
                    {event.answers[1].answer_name}
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Row>
        <Row>
          <Col xs={4} lg={4}>
            Placeholder
          </Col>
          <Col xs={4} lg={4}>
            HP: {this.props.HP}, MONEY: {this.props.MONEY}
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
