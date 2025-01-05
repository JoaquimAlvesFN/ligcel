"use client";
import QuestionsStyle from "./style-questions";
import Accordion from "react-bootstrap/Accordion";

import questions from "@/data/questions.json";

export default function Questions() {
  return (
    <QuestionsStyle.Container>
      <QuestionsStyle.Title>
        Caso tenha dúvidas, consulte nossas perguntas frequentes
      </QuestionsStyle.Title>

      <QuestionsStyle.ContainerAccordion defaultActiveKey="0">
        {questions.data.map((question, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{question.question}</Accordion.Header>
            <Accordion.Body>{question.response}</Accordion.Body>
          </Accordion.Item>
        ))}
      </QuestionsStyle.ContainerAccordion>
    </QuestionsStyle.Container>
  );
}
