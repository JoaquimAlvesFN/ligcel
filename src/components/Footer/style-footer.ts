import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const FooterLogo = styled(Image)`
  width: 160px;
  height: 100px;
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconSocial = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid;
  border-color: red;
`;

const MinimalText = styled.span`
  align-self: center;
  font-size: 10px;
`;

const MinimalSubText = styled.span`
  align-self: center;
  font-size: 10px;
`;

const FooterStyle = {
  Container,
  FooterLogo,
  SocialsContainer,
  IconSocial,
  MinimalText,
  MinimalSubText,
};

export default FooterStyle;
