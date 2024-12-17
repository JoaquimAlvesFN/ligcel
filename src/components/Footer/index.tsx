import FooterStyle from "./style-footer";
import Logo from "@/assets/logo_1x.png";

export default function Footer() {
  return (
    <FooterStyle.Container>
      <FooterStyle.FooterLogo alt="Ligcel | SKY" src={Logo} />

      {/* <FooterStyle.SocialsContainer>
        <FooterStyle.IconSocial>F</FooterStyle.IconSocial>
        <FooterStyle.IconSocial>I</FooterStyle.IconSocial>
        <FooterStyle.IconSocial>Y</FooterStyle.IconSocial>
      </FooterStyle.SocialsContainer> */}

      <FooterStyle.MinimalText>
        {" "}
        LIGCEL COMERCIO E SERVICOS EM TELECOMUNICACOES LTDA. CNPJ:
        08.815.883/0001-08
      </FooterStyle.MinimalText>
      <FooterStyle.MinimalSubText>
        © {new Date().getFullYear()}. LIGCEL. Todos os direitos reservados
      </FooterStyle.MinimalSubText>
    </FooterStyle.Container>
  );
}
