import React, { useState } from "react";
import { Col, Row, List, Form, Button, Input, Tooltip } from "reactstrap";
import { Heading } from "../widges/Heading";
import "./style.css";

const Footer = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div id="footersty">
      <div className="container">
        <Row>
          <Col>
            <Row>
              <Col xs="4">
                <Heading>MoviesDb</Heading>
                <List type="unstyled">
                  <li>
                    {" "}
                    <a href="/movie" id="TooltipExample">
                      Movies
                    </a>
                  </li>
                  <Tooltip
                    placement="right"
                    isOpen={tooltipOpen}
                    target="TooltipExample"
                    toggle={toggle}
                  >
                    Movies
                  </Tooltip>
                  <li>TV-Series</li>
                  <li>FAQ's</li>
                </List>
              </Col>
              <Col xs="4">
                <Heading>Genres</Heading>
                <List type="unstyled" className="PropsTypes.color">
                  <li>Action</li>
                  <li>Animation</li>
                  <li>Fantasy</li>
                  <li>Horror</li>
                  <li>Romance</li>
                </List>
              </Col>
              <Col xs="4">
                <Heading>Country</Heading>
                <List type="unstyled">
                  <li>Nepal</li>
                  <li>India</li>
                  <li>China</li>
                  <li>Bhutan</li>
                  <li>Japan</li>
                </List>
              </Col>
            </Row>
          </Col>
          <Col>
            <Heading>Subscribe</Heading>
            <p>
              Subscribe to the MoviesDb mailing list to receive updates on
              movies, tv-series and news of top movies.
            </p>
            <Form>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Put your email"
              />
              <Button color="secondary" className="btn">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col>
            <Heading>MoviesDb</Heading>
            <p>
              Copyright <a href="/home">MoviesDb</a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
