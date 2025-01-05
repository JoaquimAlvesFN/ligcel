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
  margin: 40px 0px;

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

const SectionValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionValuesCard = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;
  text-align: center;

  border-radius: 5px;
  width: 25%;
  height: 20vh;

  box-shadow: 3px 2px 10px 3px rgba(0, 0, 0, 0.38);
  -webkit-box-shadow: 3px 2px 10px 3px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 3px 2px 10px 3px rgba(0, 0, 0, 0.38);

  @media (max-width: 768px) {
    margin-top: 25px;
    width: 65%;
  }
`;

const WhoStyle = {
  Container,
  Title,
  Paragraph,
  SectionParagraph,
  BackgroundImage,
  SectionValues,
  SectionValuesCard,
};

export default WhoStyle;
