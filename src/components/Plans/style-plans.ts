import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: white;
  padding: 50px;
`;

const Title = styled.span`
  font-weight: bold;
  color: red;
  margin-bottom: 30px;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  height: auto;
  width: 50px;
  border-radius: 10px;
  margin: 20px 0px;

  box-shadow: 2px 0px 7px 3px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 2px 0px 7px 3px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 2px 0px 7px 3px rgba(0, 0, 0, 0.39);
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonPlan = styled.button`
  background-color: red;
  color: #ffff;
  padding: 10px 35px;
  border-radius: 20px;
  border: 1px solid;
  border-color: #c5c5c5;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
`;

const DetailsLink = styled.button`
  background-color: transparent;
  color: #000;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;

const HeadTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const SubHeadTitle = styled.span`
  color: #c5c5c5;
  font-size: 16px;
`;

const ContainerPrice = styled.span`
  color: #c5c5c5;
`;

const Price = styled.span`
  text-decoration: line-through;
  color: #c5c5c5;
`;

const PrincipalPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const FormPlans = styled.form`
  display: flex;
  /* grid-template-columns: repeat(2, 500px);
  grid-gap: 10px; */
  flex-direction: column;
`;

const InputFormPlans = styled.input<{ error?: string }>`
  background-color: #fff;
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "#c5c5c5")};
  margin: 10px 0px;
  padding: 10px;
  color: #000;
  width: 50vw;
  border-radius: 6px;
`;

const ButtonFormPlans = styled.input`
  padding: 15px;
  cursor: pointer;
  background-color: #4fd600;
  border: none;
  width: 50%;
  align-self: center;
  margin: 20px 0px;
  border-radius: 30px;
  color: #000;
  font-weight: 600;
  font-size: 14px;
`;

const PlanStyle = {
  Container,
  Title,
  ContainerCard,
  ContentCard,
  ButtonPlan,
  DetailsLink,
  HeadTitle,
  SubHeadTitle,
  ContainerPrice,
  Price,
  PrincipalPrice,
  FormPlans,
  InputFormPlans,
  ButtonFormPlans,
};

export default PlanStyle;
