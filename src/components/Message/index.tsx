"use client";
import React, { useState } from "react";

import chatbotConfig from "./chatbotConfig.json";
import useGlobalState from "@/store/global-state";

export default function Message() {
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

  return (
    openChatbot && (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1em",
          width: "400px",
          height: "400px",
          position: "fixed",
          right: 10,
          bottom: 10,
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{ height: "200px", overflowY: "scroll", marginBottom: "1em" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                textAlign: msg.sender === "bot" ? "left" : "right",
                margin: "2rem 0",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "0.5em 1em",
                  borderRadius: "15px",
                  background: msg.sender === "bot" ? "#f1f1f1" : "#007bff",
                  color: msg.sender === "bot" ? "#000" : "#fff",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          style={{ width: "calc(100% - 60px)", marginRight: "10px" }}
        />
        <button onClick={handleSendMessage}>Enviar</button>
        <br />
        <br />
        <br />
        <span onClick={() => changeOpenChatbot(false)}>X</span>
      </div>
    )
  );
}
