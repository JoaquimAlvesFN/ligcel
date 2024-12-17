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
            right: 10,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a onClick={() => changeOpenChatbot(!openChatbot)}>
            <Image
              width={90}
              src={Chatbot}
              alt="Compre agora através do whatsapp"
            />
          </a>
          <a href="https://wa.me/5585986516133" target="_blank">
            <Image
              width={100}
              src={Whatsapp}
              alt="Compre agora através do whatsapp"
            />
          </a>
        </div>
      )}
    </>
  );
}
