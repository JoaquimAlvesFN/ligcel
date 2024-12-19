"use client";
import React, { useState } from "react";

import chatbotConfig from "./chatbotConfig.json";
import useGlobalState from "@/store/global-state";

export default function Message() {
  const { innerWidth } = window;

  const { changeOpenChatbot, openChatbot } = useGlobalState();

  const [messages, setMessages] = useState([
    { sender: "bot", text: chatbotConfig.welcomeMessage },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);

    // Busca a resposta mais relacionada com base em palavras-chave
    const question = chatbotConfig.questions.find((q) =>
      q.question
        .toLowerCase()
        .split(" ")
        .some((word) => userInput.toLowerCase().includes(word))
    );

    if (question) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: question.response },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: chatbotConfig.fallbackMessage },
      ]);
    }

    setUserInput("");
  };

  const verifyKey = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    openChatbot && (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1em",
          width: innerWidth <= 768 ? "auto" : "400px",
          height: innerWidth <= 768 ? "400px" : "auto",
          position: "fixed",
          right: 10,
          // left: innerWidth <= 768 ?? 10,
          bottom: 10,
          backgroundColor: "#fff",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ height: "200px", overflowY: "auto", marginBottom: "1em" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.sender === "bot" ? "left" : "right",
                margin: "2rem 1rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "0.5em 1em",
                  borderRadius: "15px",
                  fontSize: 14,
                  background: msg.sender === "bot" ? "#f1f1f1" : "#007bff",
                  color: msg.sender === "bot" ? "#000" : "#fff",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onKeyDown={verifyKey}
            placeholder="Digite sua mensagem..."
            style={{
              width: "calc(100% - 60px)",
              marginRight: "10px",
              backgroundColor: "#FFF",
              color: "#000",
              height: "30px",
              borderRadius: 8,
              paddingLeft: 10,
            }}
          />
          <button style={{ padding: 2 }} onClick={handleSendMessage}>
            Enviar
          </button>
        </div>
        <br />
        <br />
        <br />
        <span
          style={{
            position: "absolute",
            top: -20,
            right: 20,
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => {
            changeOpenChatbot(false);
          }}
        >
          FECHAR
        </span>
      </div>
    )
  );
}
