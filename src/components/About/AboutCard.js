import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요! <br />
            저는 <span className="purple">SnowsFE</span>로 활동하고 있는
            <span className="purple"> Front-End 개발자</span> 입니다!
            <br />
            저는 현재 Juspay에서 소프트웨어 개발자로 일하고 있습니다.
            <br />
            BIT Mesra에서 수학 및 컴퓨팅 합성 MSc (IMSc)를 졸업했습니다.
            <br />
            <br />
            코딩 외에도 즐겨하는 활동 몇 가지!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 게임하기
            </li>
            <li className="about-activity">
              <ImPointRight /> 기술 블로그 쓰기
            </li>
            <li className="about-activity">
              <ImPointRight /> 여행하기
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "차이를 만드는 것을 지향하십시오!"{" "}
          </p>
          <footer className="blockquote-footer">SnowFE</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
