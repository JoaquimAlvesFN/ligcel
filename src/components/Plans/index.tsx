import PlanStyle from "./style-plans";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import ReactModal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useScreenWidth } from "@/hooks/screenWidth";
import { useRouter } from "next/navigation";
import useSelectedPlans from "@/store/selected-plans";

interface PlansFormProps {
  name: string;
  cellphone: number;
  email: string;
  document: number;
  register: number;
  expedition: string;
  part: string;
  position: string;
  zipcode: number;
  address: string;
  number: number;
  district: string;
  city: string;
  state: string;
  reference?: string;
}

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: 50,
        height: 22,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: 50,
        height: 22,
      }}
      onClick={onClick}
    />
  );
}

export default function Plans() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [zipcodeLoading, setZipcodeLoading] = React.useState(false);
  const screenWidth = useScreenWidth();
  const { push } = useRouter();
  const { selectedPlan, changeSelectPlan } = useSelectedPlans();

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  } as Settings;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: screenWidth <= 768 ? "80%" : "50%",
      height: screenWidth <= 768 ? "90%" : "70%",
      borderRadius: "10px",
    },
  };

  const cardPlans = [
    {
      betterLabel: "Melhor Oferta",
      title: "Super HD",
      price: "59,99",
      promotionPrice: "99,99",
      afterThreeMonthsPrice: "109,90",
      titleThreeMonths: "Após 3 meses, valor ",
      servicesInclude: [""],
      moreDetails: ["Texto 001", "Texto 002", "Texto 003"],
    },
    {
      title: "Top HD",
      price: "102,90",
      promotionPrice: "149,90",
      afterThreeMonthsPrice: "109,90",
      titleThreeMonths: "Após 3 meses, valor ",
      servicesInclude: [""],
      moreDetails: ["Texto 001", "Texto 002", "Texto 003"],
    },
    {
      title: "Connect",
      price: "49,90",
      promotionPrice: "399,90",
      afterThreeMonthsPrice: "109,90",
      titleThreeMonths: "Após 3 meses, valor ",
      servicesInclude: [""],
      moreDetails: ["Texto 001", "Texto 002", "Texto 003"],
    },
    {
      title: "Connect",
      price: "49,90",
      promotionPrice: "399,90",
      afterThreeMonthsPrice: "109,90",
      titleThreeMonths: "Após 3 meses, valor ",
      servicesInclude: [""],
      moreDetails: ["Texto 001", "Texto 002", "Texto 003"],
    },
    {
      title: "Connect",
      price: "49,90",
      promotionPrice: "399,90",
      afterThreeMonthsPrice: "109,90",
      titleThreeMonths: "Após 3 meses, valor ",
      servicesInclude: [""],
      moreDetails: ["Texto 001", "Texto 002", "Texto 003"],
    },
  ];

  const schema = yup
    .object({
      name: yup.string().min(5).max(30).required(),
      cellphone: yup.number().required(),
      email: yup.string().email().required(),
      document: yup.number().required(),
      register: yup.number().required(),
      expedition: yup.string().required(),
      part: yup.string().required(),
      position: yup.string().required(),
      zipcode: yup.number().min(8).required(),
      address: yup.string().required(),
      district: yup.string().required(),
      number: yup.number().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      reference: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<PlansFormProps> = (data) => {
    const textFormmated = `VENDA Produto ✅  ${"\n"}\
      _Formulário de contratação para de acordo do cliente_ \
      *Endereço de instalação:* ${data.address},${data.number} - ${
      data.district
    }, ${data.city}/${data.state}\
      *CEP:* ${data.zipcode} \
      *E-mail:* ${data.email}\
      *CPF/CNPJ:* ${data.document}\
      *RG:* ${data.register}\
      *Data de expedição:* ${data.expedition}\
      *Órgão:* ${data.part}\
      *Cargo do CPF informado:*  ${data.position}\
      *Telefone:* ${data.cellphone}\
      _Resumo do plano contratado_ \
      *Pacote contratado:* ${selectedPlan.name} \
      *Valor final acordado:* R$ ${selectedPlan.value}`;

    push(
      `https://api.whatsapp.com/send?phone=5585986516133&text=${textFormmated}`
    );
    closeModal();
    changeSelectPlan({
      name: "",
      value: "",
      options: "",
    });
    reset();
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function getZipCode(zipcode: number) {
    setZipcodeLoading(true);
    const data = await (
      await fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
    ).json();

    setValue("address", data.logradouro);
    setValue("city", data.localidade);
    setValue("state", data.estado);
    setValue("district", data.bairro);
    setZipcodeLoading(false);
  }

  return (
    <>
      <PlanStyle.Container>
        <PlanStyle.Title>Nossos planos</PlanStyle.Title>
        <div
          className="slider-container"
          style={{ width: screenWidth <= 768 ? "100%" : "40%" }}
        >
          {/* @typescript-eslint/ban-ts-comment */}
          {/* @ts-expect-error */}
          <Slider {...settings}>
            {cardPlans.map((card, index) => (
              <PlanStyle.ContainerCard key={index}>
                <PlanStyle.ContentCard>
                  <PlanStyle.HeadTitle>{card.title}</PlanStyle.HeadTitle>
                  <PlanStyle.ContainerPrice>
                    De <PlanStyle.Price>{card.price}</PlanStyle.Price> por
                    apenas
                  </PlanStyle.ContainerPrice>
                  <PlanStyle.PrincipalPrice>
                    R$ {card.promotionPrice}/mês
                  </PlanStyle.PrincipalPrice>
                  <PlanStyle.SubHeadTitle>
                    {card.titleThreeMonths}
                    {card.afterThreeMonthsPrice}
                  </PlanStyle.SubHeadTitle>
                  <PlanStyle.ButtonPlan
                    onClick={() => {
                      openModal();
                      changeSelectPlan({
                        name: card.title,
                        value: card.price,
                        options: "",
                      });
                    }}
                  >
                    Contratar Plano
                  </PlanStyle.ButtonPlan>
                  {/* <PlanStyle.DetailsLink>
                    {"Mais detalhes >"}
                  </PlanStyle.DetailsLink> */}
                </PlanStyle.ContentCard>
              </PlanStyle.ContainerCard>
            ))}
          </Slider>
        </div>
      </PlanStyle.Container>
      {/* @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {/* <button onClick={closeModal}>X</button> */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        <div>
          <span>
            Você escolheu <strong>{selectedPlan.name}</strong> por{" "}
            <strong>R$ {selectedPlan.value}</strong>.
          </span>
          <br />
          <br />
          <br />
          <span>
            Agora, informe os seus dados. Vamos te ajudar com a contratação.
          </span>
          <br />
          <br />
          <br />
        </div>
        <PlanStyle.FormPlans onSubmit={handleSubmit(onSubmit)}>
          <PlanStyle.InputFormPlans
            {...register("name")}
            placeholder="Insira um nome*"
            error={errors.name?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("cellphone")}
            placeholder="DDD + Telefone*"
            error={errors.cellphone?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("email")}
            placeholder="Insira seu email*"
            error={errors.email?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("document")}
            placeholder="CPF ou CNPJ*"
            error={errors.document?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("register")}
            placeholder="RG*"
            error={errors.register?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("expedition")}
            placeholder="Data Expedição*"
            error={errors.expedition?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("part")}
            placeholder="Orgão*"
            error={errors.part?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("position")}
            placeholder="Cargo do CPF informado*"
            error={errors.position?.message}
          />

          {zipcodeLoading && "loading..."}
          <PlanStyle.InputFormPlans
            {...register("zipcode")}
            placeholder="CEP*"
            error={errors.zipcode?.message}
            onChange={(text) =>
              text.target.value.length >= 8 &&
              getZipCode(Number(text.target.value))
            }
          />
          <PlanStyle.InputFormPlans
            {...register("address")}
            placeholder="Endereço*"
            error={errors.address?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("number")}
            placeholder="Número*"
            error={errors.number?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("district")}
            placeholder="Bairro*"
            error={errors.district?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("city")}
            placeholder="Cidade*"
            error={errors.city?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("state")}
            placeholder="Estado*"
            error={errors.state?.message}
          />
          <PlanStyle.InputFormPlans
            {...register("reference")}
            placeholder="Ponto de referencia*"
            error={errors.reference?.message}
          />
          <div />

          {/* <input {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>} */}

          <PlanStyle.ButtonFormPlans type="submit" value="Contratar agora" />
        </PlanStyle.FormPlans>
      </ReactModal>
    </>
  );
}
