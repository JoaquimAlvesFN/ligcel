import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.2rem;
`;

const SectionParagraph = styled.div`
  width: 50%;
  margin: 20px 0px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const BackgroundImage = styled(Image)`
  position: absolute;
  opacity: 25%;
  bottom: 0;
  right: 10px;
  width: 280px;
  height: 200px;
`;

const WhoStyle = {
  Container,
  Title,
  Paragraph,
  SectionParagraph,
  BackgroundImage,
};

export default WhoStyle;
