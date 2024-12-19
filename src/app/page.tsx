"use client";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";
import AboutPlans from "@/components/AboutPlans";
import Questions from "@/components/Questions";
import Image from "next/image";
import Whatsapp from "@/assets/whatsapp.png";
import Chatbot from "@/assets/chatbot.png";
import useGlobalState from "@/store/global-state";
import Message from "@/components/Message";

export default function Home() {
  const { changeOpenChatbot, openChatbot } = useGlobalState();
  const { innerWidth } = window;

  const widthMsg = innerWidth <= 768 ? 60 : 90;
  const widthWpp = innerWidth <= 768 ? 60 : 100;

  return (
    <>
      <Header />
      <Banner />
      <Plans />
      <AboutPlans />
      <Questions />
      <Footer />
      <Message />

      {!openChatbot && (
        <div
          style={{
            position: "fixed",
            bottom: 10,
            right: innerWidth <= 768 ? 5 : 10,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a onClick={() => changeOpenChatbot(!openChatbot)}>
            <Image
              width={widthMsg}
              src={Chatbot}
              alt="Compre agora através do whatsapp"
            />
          </a>
          <a href="https://wa.me/5585986516133" target="_blank">
            <Image
              width={widthWpp}
              src={Whatsapp}
              alt="Compre agora através do whatsapp"
            />
          </a>
        </div>
      )}
    </>
  );
}
