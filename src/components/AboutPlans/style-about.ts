import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ParagraphTitle = styled.span`
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const ParagraphSubTitle = styled.span``;

const ParagraphList = styled.ul`
  margin-top: 40px;
`;

const ParagraphListContent = styled.li`
  font-size: 16px;
  margin-bottom: 15px;
`;

const ImageParagraph = styled(Image)`
  width: 30%;
  height: 30%;
  margin-left: 50px;

  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    margin-left: 0px;
  }
`;

const AboutStyle = {
  Container,
  Paragraph,
  ParagraphTitle,
  ParagraphSubTitle,
  ParagraphList,
  ParagraphListContent,
  ImageParagraph,
};

export default AboutStyle;
