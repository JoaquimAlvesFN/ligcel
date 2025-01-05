"use client";
import React from "react";
import Header from "@/components/Header";
import WhoStyle from "./style-who";
import whodata from "@/data/institucional.json";
import { images } from "./images";
import Image from "next/image";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Footer from "@/components/Footer";

export default function QuemSomos() {
  // function openImage(src: string) {
  //   window.open(src, "_blank");
  // }

  return (
    <>
      <Header />
      <WhoStyle.Container>
        <WhoStyle.SectionParagraph>
          <WhoStyle.Title>{whodata.sobre.titulo}</WhoStyle.Title>
          <WhoStyle.Paragraph>{whodata.sobre.descricao}</WhoStyle.Paragraph>
        </WhoStyle.SectionParagraph>

        <WhoStyle.SectionParagraph>
          <WhoStyle.Title style={{ textAlign: "center" }}>
            {whodata.valores.titulo}
          </WhoStyle.Title>
          <WhoStyle.SectionValues>
            {whodata.valores.values.map((value, index) => (
              <WhoStyle.SectionValuesCard key={index}>
                {value}
              </WhoStyle.SectionValuesCard>
            ))}
          </WhoStyle.SectionValues>
        </WhoStyle.SectionParagraph>

        <WhoStyle.SectionParagraph>
          <WhoStyle.Title>Nossa equipe</WhoStyle.Title>
          {/* <RowsPhotoAlbum photos={formattedImages} /> */}
          <ImageList
            sx={{ width: "55vw", height: "70vh" }}
            cols={3}
            rowHeight={300}
          >
            {images.map((item, index) => (
              <ImageListItem key={index}>
                <Image
                  // onClick={() => openImage(item.src)}
                  src={item.src}
                  width={320}
                  // height={250}
                  alt={"Ligcel"}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </WhoStyle.SectionParagraph>

        <WhoStyle.SectionParagraph>
          <WhoStyle.Title>{whodata.conosco.titulo}</WhoStyle.Title>
          <WhoStyle.Paragraph>{whodata.conosco.descricao}</WhoStyle.Paragraph>
          <ul style={{ marginTop: "1rem" }}>
            <li style={{ marginBottom: 10 }}>
              Telefone: {whodata.conosco.contato.telefone}
            </li>
            <li style={{ marginBottom: 10 }}>
              WhatsApp: {whodata.conosco.contato.whatsapp}
            </li>
            <li style={{ marginBottom: 10 }}>
              E-mail: {whodata.conosco.contato.email}
            </li>
          </ul>
        </WhoStyle.SectionParagraph>
        {/*
        <WhoStyle.BackgroundImage
          src={SkyImage}
          alt="Ligcel | SKY"
          loading="lazy"
        /> */}
      </WhoStyle.Container>
      <Footer />
    </>
  );
}
