import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/NewAvatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Who am i </span>
            </h1>
            <p className="home-about-body">
              React로 웹 정복 하는 그날까지😏
              <br />
              <br />
              저는
              <b className="purple"> [Javascript, React]</b>
              가 정말 재미있는 기술 스택이라고 생각합니다.
              <br />
              <br />
              이러한 기술 스택을 이용하여 많은 사람들이 제 작품을&nbsp;
              <b className="purple">경험</b>하게 하는 것이 목표입니다!
              <br />
              <br />
              또한, 광고홍보학과를 전공하였기 때문에 어떻게하면 사람들의&nbsp;
              <b className="purple">Needs</b>를 <br />
              충족 시킬 수 있을지에 대한 방법을 확실하게 알고 있습니다!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>현재 진행 상황이 궁금하시다면..</h2>
            <p>
              <span className="purple"> 언제든 저를 찾아주세요! </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SnowsFE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
