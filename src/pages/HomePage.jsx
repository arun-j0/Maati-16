import React, { useState, useEffect } from 'react';

// Main Component
const HomePageWithContactAndChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Scroll to top when the component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle sending message in chatbot
  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simulating a response from the chatbot
    setTimeout(() => {
      const response = getResponse(input);
      setMessages((prev) => [...prev, { text: response, type: 'bot' }]);
    }, 1000);
  };

  // Predefined chatbot responses
  const getResponse = (input) => {
    const responses = {
      'What is your mission?': 'Our mission is to support the community through various charitable initiatives.',
      'How can I donate?': 'You can donate through our website by clicking on the "Donate" button.',
      'What projects are you working on?': 'We are currently working on education, healthcare, and environmental conservation projects.',
      'How can I volunteer?': 'Please visit our Volunteer page for more information on how to get involved.',
      'default': 'I am sorry, I did not understand that. Can you please rephrase?',
    };
    return responses[input] || responses['default'];
  };

  return (
    <>
      <section id="contact" className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Contact Us</h2>
          <form className="max-w-5xl mx-10 md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600"
                />
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="message" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message"
                className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600"
              ></textarea>
            </div>
            <div className="flex justify-center mt-8">
              <button type="submit" className="w-full py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600 md:w-auto md:py-2 md:px-8">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="chatbot-container fixed bottom-5 right-5 w-80 bg-white border-2 border-[#fee57e] rounded-lg shadow-lg">
        <div className="chatbot-header bg-[#280101] text-[#fee57e] p-3 text-center rounded-t-lg">
          <h2>Chatbot</h2>
        </div>
        <div className="chatbot-messages p-3 max-h-64 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`message p-2 mb-2 rounded-lg ${msg.type === 'user' ? 'bg-[#fee57e] text-[#280101] self-end' : 'bg-gray-200 text-black self-start'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chatbot-input flex p-3 border-t border-[#fee57e]" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow p-2 border-2 border-[#fee57e] rounded-md focus:outline-none"
          />
          <button type="submit" className="ml-2 p-2 bg-[#280101] text-[#fee57e] rounded-md hover:bg-[#fee57e] hover:text-[#280101] transition duration-300">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

// Styles for the chatbot (CSS-in-JS)
const chatbotStyles = `
  .chatbot-container {
    width: 300px;
    background-color: #fff;
    border: 2px solid #fee57e;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.5s;
  }

  .chatbot-header {
    background-color: #280101;
    color: #fee57e;
    padding: 10px;
    text-align: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .chatbot-messages {
    padding: 10px;
    flex-grow: 1;
    overflow-y: auto;
    max-height: 300px;
  }

  .message {
    margin: 5px 0;
    padding: 8px;
    border-radius: 5px;
    width: fit-content;
    max-width: 80%;
  }

  .message.user {
    background-color: #fee57e;
    align-self: flex-end;
  }

  .message.bot {
    background-color: #f1f1f1;
    align-self: flex-start;
  }

  .chatbot-input {
    display: flex;
    padding: 10px;
    border-top: 1px solid #fee57e;
  }

  .chatbot-input input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #fee57e;
    border-radius: 4px;
  }

  .chatbot-input button {
    background-color: #280101;
    color: #fee57e;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    margin-left: 5px;
    cursor: pointer;
  }

  .chatbot-input button:hover {
    background-color: #fee57e;
    color: #280101;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default HomePageWithContactAndChatbot;
