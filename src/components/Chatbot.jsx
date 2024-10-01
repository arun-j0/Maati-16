import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    // Logic for sending messages to chatbot
    const newMessage = "This is a response from the chatbot!";
    setMessages([...messages, { text: newMessage, sender: 'bot' }]);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="mb-4 text-gray-700">Chatbot</div>
      <div className="h-40 overflow-y-auto bg-gray-100 p-2 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="text-gray-800">{msg.sender === 'bot' ? `Bot: ${msg.text}` : `You: ${msg.text}`}</div>
        ))}
      </div>
      <button
        onClick={handleSendMessage}
        className="w-full px-3 py-2 mt-2 font-bold text-white bg-[#8b5a2b] rounded hover:bg-[#5d493e]"
      >
        Send Message
      </button>
    </div>
  );
};

export default Chatbot;
