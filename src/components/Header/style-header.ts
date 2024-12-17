import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled(Image)`
  width: 160px;
  height: 80px;
`;

const HeaderStyle = {
  Container,
  Logo,
};

export default HeaderStyle;
