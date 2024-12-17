import QuestionsStyle from "./style-questions";
import Accordion from "react-bootstrap/Accordion";

export default function Questions() {
  const data = [
    {
      question: "Quais os pacotes e combos de programação que posso assinar?",
      response:
        "Você pode optar pelo SKY Pré-pago, adquirindo o equipamento e escolhendo a recarga com o período e o pacote de canais que preferir, ou escolher um plano Pós-pago e ter seus canais favoritos sempre disponÌveis sem se preocupar. Visite as páginas de planos e escolha aquele que mais combina com você!",
    },
    {
      question: "Quais são os métodos de pagamentos da SKY?",
      response:
        "Muito fácil assinar SKY. O pagamento pode ser feito por débito em conta corrente, cartão de crédito, boleto bancário, PEC (Pagamento Eletrônico na CEF), PFB (Pague Fácil Boleto) e ficha de compensação.",
    },
    {
      question: "Quais são os recursos do SKY HDTV?",
      response:
        "Gravação, pause e replay, Cine SKY HD, identificador de chamadas, gravação recorrente, miniguia, meus canais favoritos, minhas cenas favoritas, dupla memória temporária, busca de programas, 500 gb de espaço, meu guia de programação, gravação a distância, controle dos pais, gravação simultânea, tarja de informações, SKY apps, conexão internet.",
    },
    {
      question: "Como posso ganhar degustação de programação por 1 mês?",
      response:
        "Para ter direito à degustação, você precisa aceitar receber comunicações da SKY via Whatsapp. Você pode pedir a degustação ao telefone com nosso atendimento ou no carrinho online marcar a opção de receber comunicação SKY antes de finalizar o pedido de assinatura. As degustações estão disponíveis apenas para assinatura de planos SKY Pós-Pago Comodato (aluguel de equipamento SKY).",
    },
    {
      question: "Quais degustações estão disponíveis para escolha?",
      response:
        "As degustações disponíveis para escolha são: Premiere, Nosso Futebol e Telecine. Elas são disponíveis apenas mediante aceite de comunicação com a SKY via Whatsapp e válidas apenas para planos SKY Pós-Pago Comodato (aluguel de equipamento SKY).",
    },
  ];

  return (
    <QuestionsStyle.Container>
      <QuestionsStyle.Title>
        Caso tenha dúvidas, consulte nossas perguntas frequentes
      </QuestionsStyle.Title>

      <QuestionsStyle.ContainerAccordion defaultActiveKey="0">
        {data.map((question, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{question.question}</Accordion.Header>
            <Accordion.Body>{question.response}</Accordion.Body>
          </Accordion.Item>
        ))}
      </QuestionsStyle.ContainerAccordion>
    </QuestionsStyle.Container>
  );
}
