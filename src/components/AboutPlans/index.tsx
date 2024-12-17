import AboutStyle from "./style-about";
import AboutImage from "@/assets/about.png";

export default function AboutPlans() {
  return (
    <AboutStyle.Container>
      <AboutStyle.Paragraph>
        <AboutStyle.ParagraphTitle>
          <strong>Assine</strong> qualquer plano SKY e{" "}
          <strong>assista também pela SKY+!</strong>
        </AboutStyle.ParagraphTitle>
        <AboutStyle.ParagraphSubTitle>
          Não tem como ficar de fora dessa, não é mesmo? Assine SKY e fique em
          dia com a sua programação favorita.
        </AboutStyle.ParagraphSubTitle>

        <AboutStyle.ParagraphList>
          <AboutStyle.ParagraphListContent>
            {" "}
            Assista seu conteúdo preferido onde e quando quiser, pelo celular,
            computador ou TV.
          </AboutStyle.ParagraphListContent>
          <AboutStyle.ParagraphListContent>
            {" "}
            Curta milhares de filmes, séries, desenhos e programas, sem pagar
            nada a mais por isso!
          </AboutStyle.ParagraphListContent>
          <AboutStyle.ParagraphListContent>
            {" "}
            Acompanhe canais ao vivo no celular e computador pela SKY+.
          </AboutStyle.ParagraphListContent>
          <AboutStyle.ParagraphListContent>
            {" "}
            Alugue sucessos que acabaram de sair do cinema, pela sua TV no canal
            1.
          </AboutStyle.ParagraphListContent>
        </AboutStyle.ParagraphList>
      </AboutStyle.Paragraph>

      <AboutStyle.ImageParagraph alt="LIGCEL | SKY" src={AboutImage} />
    </AboutStyle.Container>
  );
}
