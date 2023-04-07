import { useState, useEffect } from "react";

function connectWebSocket(guid, setGuid, setMessages, messages) {
  const ws = new WebSocket("ws://localhost:3000/cable");

  ws.onopen = () => {
    console.log("Connected to websocket server");
    setGuid(Math.random().toString(36).substring(2, 15));

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    const message = data.message;
    setMessages((messages) => [...messages, message]);
  };
}

function Messages() {
  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");

  useEffect(() => {
    connectWebSocket(guid, setGuid, setMessages, messages);
  }, []);

  useEffect(() => {
    fetchMessages();
    console.log("mensajes", messages);
  }, []);

  function fetchMessages() {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = e.target.message.value;
    e.target.message.value = "";

    await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body }),
    });
  }

  console.log(messages.map((message) => message.id));
  return (
    <>
      <div>
        <h1>Messages</h1>
        <p>Guid: {guid}</p>
      </div>
      <div className="messages" id="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
      <div className="messageForm">
        <form onSubmit={handleSubmit}>
          <input type="text" className="messageInput" name="message" />
          <button className="messageButton" type="sybmit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Messages;
