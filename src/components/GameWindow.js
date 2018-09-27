import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import "./GameWindow.css";
import hero from "../images/characters/2.png";
import devil from "../images/monster/devil.png";

class GameWindow extends React.Component {
  render() {
    return (
      <Grid className="GameWindow">
        <Row>
          <Col xs={4} lg={4}>
            Goals: 5 hp, Hm: 5
          </Col>
          <Col xs={4} lg={4}>
            <img src={devil} />
          </Col>
          <Col xs={4} lg={4}>
            Alignment
          </Col>
        </Row>
        {this.props.mainEvents.map((event, index) => (
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
                    onClick={() => alert(event.answers[0].mainMessage.message)}
                  >
                    {event.answers[0].answer_name}
                  </Button>
                </Col>
                <Col xs={4} lg={4}>
                  <img src={hero} />
                </Col>
                <Col xs={4} lg={4}>
                  <Button
                    bsStyle="warning"
                    onClick={() => alert(event.answers[1].mainMessage.message)}
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
            Inventory
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default GameWindow;
