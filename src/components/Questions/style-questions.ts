import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

const ContainerAccordion = styled(Accordion)`
  width: 50%;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const QuestionsStyle = { Container, Title, ContainerAccordion };

export default QuestionsStyle;
